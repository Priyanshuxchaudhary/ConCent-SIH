Contact Center AI Web Application

A full-stack, responsive web application designed to streamline customer service operations for contact centers. Powered by AI-driven sentiment analysis and an intuitive dashboard, this solution enhances performance, customer satisfaction, and business intelligence.
Table of Contents

    Project Overview
    Features
    Technologies Used
    Installation Instructions
    Usage
    API Documentation
    Contributing
    License

Project Overview

This application is designed to provide businesses with a unified solution to improve customer support operations. The core features include sentiment analysis of customer interactions, real-time performance tracking of customer care executives, and comprehensive data visualization.

    Sentiment Analysis: The application analyzes voice call recordings, providing sentiment, sentiment extremeness score, and follow-up suggestions for customer care executives.
    Unified Dashboard: A modern and responsive dashboard that displays real-time data on customer interactions, products, geographical information, and executive performance.
    Data Management: Real-time data management and visualization for effective decision-making.

With its clean interface, powerful AI integration, and robust data management tools, this app offers an all-in-one platform for contact centers.
Features

    AI-Powered Sentiment Analysis: Extracts sentiment from voice call recordings, including sentiment extremeness score for better follow-up actions.
    Real-Time Data: Instant insights into customer interactions, executive performance, and product information.
    Modern Data Visualization: Utilizes graphs and charts to provide a clear picture of key performance indicators (KPIs) for executives and management.
    Unified Dashboard: Combines customer care information, geographical data, product statistics, and executive performance into one interface.
    Seamless Follow-up: Automatically generates follow-up actions based on sentiment analysis for better customer experience management.
    Performance Monitoring: Tracks and analyzes the performance of customer care executives in real-time.

Technologies Used

    Backend: FastAPI, Express.js, Node.js
    Frontend: React.js, Redux, Tailwind CSS, Cascading Style Sheets (CSS)
    Database: MongoDB, Mongoose ODM
    AI & Machine Learning: PyTorch, TensorFlow
    Version Control: GitHub
    Others: JavaScript

Installation Instructions
Prerequisites

Before running the project, ensure you have the following installed:

    Node.js
    Python 3.x
    MongoDB (local or cloud instance)

Setup

    Clone the repository to your local machine:

git clone https://github.com/yourusername/contact-center-ai-app.git
cd contact-center-ai-app

Install frontend dependencies:

cd client
npm install

Install backend dependencies:

cd server
pip install -r requirements.txt

Configure your MongoDB connection in the .env file.

Start the backend server:

cd server
uvicorn app.main:app --reload

Start the frontend application:

    cd client
    npm start

Your application should now be running at http://localhost:3000.
Usage

Once the application is running, visit the frontend URL to interact with the unified dashboard. You can:

    Monitor real-time performance of customer care executives.
    View sentiment analysis of customer calls.
    Track follow-up suggestions based on call transcriptions.
    Explore detailed data visualizations related to customer interactions, products, and geographical data.

API Documentation

The API endpoints provide essential data and functionality for interacting with the backend.
POST /api/analyze-sentiment

    Description: Analyzes the sentiment of a voice call recording.
    Body:

{
    "recording_url": "URL_to_voice_call_recording"
}

Response:

    {
        "sentiment": "positive",
        "sentiment_score": 0.85,
        "follow_up_suggestion": "Offer a discount on the next purchase."
    }

GET /api/performance

    Description: Retrieves performance data of customer care executives.
    Response:

    {
        "executives": [
            {
                "name": "John Doe",
                "calls_resolved": 50,
                "average_rating": 4.5
            },
            {
                "name": "Jane Smith",
                "calls_resolved": 40,
                "average_rating": 4.8
            }
        ]
    }

Contributing

We welcome contributions! To contribute to this project, please follow these steps:

    Fork the repository.
    Create a new branch (git checkout -b feature-name).
    Commit your changes (git commit -m 'Add feature').
    Push to the branch (git push origin feature-name).
    Open a pull request.

Please make sure your code passes linting and tests before submitting a pull request.
