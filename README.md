Call Center AI Web Application 🌐

    A full-stack, responsive web application built to enhance customer service operations for contact centers. With AI-powered sentiment analysis and an intuitive unified            dashboard, this solution streamlines performance tracking, customer interactions, and data visualization. 🚀

📑Table of Contents

    Project Overview
    Features
    Technologies Used
    Installation Instructions
    Usage
    API Documentation
    Contributing
    License

🌟 Project Overview

    This application is designed to provide businesses with a one-stop solution for improving contact center operations. By leveraging AI-powered tools and real-time data            management, the app ensures efficient customer care and data-driven decision-making. 

📊Key Features:

    AI-Powered Sentiment Analysis 💬
    Real-Time Data Visualization 📈
    Unified Dashboard 🖥️
    Performance Tracking 🏆

📌 Highlights:

    Sentiment Analysis: AI analyzes voice call recordings to provide sentiment scores and suggest follow-ups based on sentiment extremeness.
    Unified Dashboard: A clean, modern dashboard displaying customer, executive, and product data.
    Real-Time Updates: Monitor customer interactions, executive performance, and geographical data instantly.

🛠️ Features

    AI-Driven Sentiment Analysis 🧠:
        Extracts sentiment, sentiment extremeness score, and follow-up actions from voice call recordings.

    Real-Time Data ⏱️:
        Displays live data on customer interactions, product statistics, and geographic information.

    Modern Data Visualizations 📊:
        Beautiful charts and graphs to track key performance indicators (KPIs) in real-time.

    Performance Monitoring 📉:
        Track customer care executives' performance and provide actionable insights.

    Follow-Up Suggestions 💡:
        Automatically generates follow-up actions based on sentiment analysis to improve customer experience.

⚙️ Technologies Used

    Backend:
        FastAPI 🚀
        Express.js ⚡
        Node.js 🌐

    Frontend:
        React.js ⚛️
        Redux 🔄
        Tailwind CSS 🎨
        CSS3 🌟

    Database:
        MongoDB 🗄️
        Mongoose ODM 📚

    AI & Machine Learning:
        PyTorch 🤖
        TensorFlow 🧠

    Version Control:
        GitHub 🐙

🧑‍💻 Installation Instructions
    Prerequisites

    Node.js 🌐
    Python 3.x 🐍
    MongoDB (local or cloud instance) 🌍

Setup Steps

    Clone the repository:

    git clone https://github.com/Priyanshuxchaudhary/ConCent-SIH.git
    cd ConCent-SIH

Install frontend dependencies:

    cd client
    npm install

Install backend dependencies:

    cd server
    pip install -r requirements.txt

Configure MongoDB connection in the .env file.

Start the backend server:

    cd server
    uvicorn app.main:app --reload

Start the frontend application:

    cd client
    npm start

Your app will now be running at http://localhost:3000 🚀

💡 Usage

Once the app is running, open the frontend URL to begin exploring the following:

    Monitor Real-Time Performance 🔍: Track the performance of customer care agents.
    View Sentiment Analysis 🧠: Check sentiment scores and get follow-up recommendations.
    Explore Data Visualizations 📊: Dive into real-time insights for customer interactions, executive performance, and more.
    Track Executive Performance 📈: Evaluate and compare executive stats such as call resolutions and ratings.

AI model Response Example:

    {
        "sentiment": "positive",
        "sentiment_score": 0.85,
        "follow_up_suggestion": "Offer a discount on the next purchase."
    }

🤝 Contributing

We welcome contributions! 🙌 To contribute:

    Fork the repository 🍴
    Create a new branch (git checkout -b feature-name)
    Commit your changes (git commit -m 'Add feature')
    Push to the branch (git push origin feature-name)
    Open a pull request 🎯

Please ensure your code passes linting and tests before submitting a pull request.
