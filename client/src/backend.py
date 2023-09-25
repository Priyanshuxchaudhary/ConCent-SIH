from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse
import tempfile
import shutil
import os
import traceback
import speech_recognition as sr
from transformers import pipeline
import sys
sys.path.append('.')

app = FastAPI()

# Function to perform sentiment analysis
def perform_sentiment_analysis(text):
    model_name = "distilbert-base-uncased-finetuned-sst-2-english"
    sentiment_analysis = pipeline("sentiment-analysis", model=model_name)
    results = sentiment_analysis(text)
    sentiment_label = results[0]['label']
    sentiment_score = results[0]['score']
    return sentiment_label, sentiment_score

# Function to transcribe audio
def transcribe_audio(audio_file):
    r = sr.Recognizer()
    with sr.AudioFile(audio_file) as source:
        audio = r.record(source)
        transcribed_text = r.recognize_google(audio)
    return transcribed_text

# Create a temporary directory to store uploaded audio files
temp_dir = tempfile.mkdtemp()

# Route to upload audio files
@app.post("/uploadfile/")
async def upload_file(file: UploadFile):
    try:
        # Save the uploaded audio file to the temporary directory
        file_path = os.path.join(temp_dir, file.filename)
        with open(file_path, "wb") as f:
            f.write(file.file.read())
        
        # Perform audio transcription and sentiment analysis
        transcribed_text = transcribe_audio(file_path)
        sentiment_label, sentiment_score = perform_sentiment_analysis(transcribed_text)

        # Display transcribed text and sentiment analysis results
        result = {
            "Transcribed Text": transcribed_text,
            "Sentiment Label": sentiment_label,
            "Sentiment Score": sentiment_score
        }

        return result
    except Exception as ex:
        error_message = "Error occurred during audio transcription and sentiment analysis."
        print(error_message)
        print(str(ex))
        traceback.print_exc()
        return {"error": error_message}

# HTML form to upload audio files
html_form = """
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background-color: #3498db;
            color: #000;
        }

        h2 {
            padding: 20px;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.8);
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }

        p {
            color: #333;
        }

        input[type="file"] {
            display: none;
        }

        .file-upload {
            background-color: #3498db;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .file-upload:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>
<div class="container">
    <h2>Upload Audio File</h2>
    <p>Upload a WAV audio file:</p>

    <form action="/uploadfile/" method="post" enctype="multipart/form-data">
        <label for="file" class="file-upload">Choose File</label>
        <input type="file" name="file" id="file" onchange="displayFileName()" />
        <input type="submit" value="Upload" />
    </form>
    <p id="file-name"></p>
</div>

<script>
    function displayFileName() {
        const fileInput = document.getElementById('file');
        const fileNameDisplay = document.getElementById('file-name');

        if (fileInput.files.length > 0) {
            fileNameDisplay.innerText = 'File Name: ' + fileInput.files[0].name;
        } else {
            fileNameDisplay.innerText = '';
        }
    }
</script>

</body>
</html>


"""

@app.get("/", response_class=HTMLResponse)
async def root():
    return HTMLResponse(content=html_form, status_code=200)
