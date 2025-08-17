BrainBridge

📚 Collaborative E-Learning & Resource Sharing Platform with AI Assistance

BrainBridge is a MERN-stack based platform designed for students and educators to share, access, and collaborate on study resources in one place. It goes beyond traditional e-learning by integrating AI-powered Q&A assistance, resource sharing, and progress tracking — creating a true bridge of knowledge between learners.

✨ Features
📂 Resource Sharing

Upload/download study materials (PDF, JPEG, Videos).

Organized by semester and subject.

Search & filter resources with ease.

📝 Quizzes & Progress Tracking

Take quizzes for self-evaluation.

Track individual progress over time.

Gamified experience for motivation.

🤖 AI Assistance

AI-powered Q&A assistant to clear doubts.

Limited daily queries using a free OpenRouter API key.

Smart suggestions for related topics.

👥 Collaborative Learning

Students can contribute resources to help peers.

Ratings and feedback on shared materials.

Community-driven content curation.

🔒 Role-Based Access

Admin: Manage users, subjects, and resources.

Staff: Upload resources, create quizzes.

Students: Access/download materials, take quizzes, interact with AI.

🛠️ Tech Stack

Frontend: React.js + TailwindCSS

Backend: Node.js + Express.js

Database: MongoDB with Mongoose

Authentication: JWT-based Auth

AI: OpenRouter API Integration

Deployment: Vercel (frontend), Render/Heroku (backend)

📂 Project Structure
BrainBridge/
│── client/             # React frontend
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Routes & views
│   │   ├── store/      # State management (slices,store)
│   │   └── utils/      # Helpers & config
│
│── server/             # Express backend
│   ├── models/         # Mongoose schemas
│   ├── controllers/    # Business logic
│   ├── routes/         # API endpoints
│   ├── middleware/     # Auth & validation
│   └── config/         # DB & environment setup
│
│── package.json
│── .env.example

🚀 Getting Started
1. Clone the Repo
git clone https://github.com/your-username/brainbridge.git
cd brainbridge

2. Setup Backend
cd server
npm install
cp .env.example .env   # configure MongoDB URI, JWT_SECRET, AI API Key
npm run dev

3. Setup Frontend
cd client
npm install
npm start

4. Access the App

Open 👉 http://localhost:3000

🔮 Future Plans

📺 Live sessions & discussion forums.

📊 AI-based study path recommendations.

🎖️ Leaderboard & gamification system.

📱 Mobile app version with React Native.

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch (feature/my-feature)

Commit changes

Open a pull request

📜 License

MIT License © 2025 BrainBridge Team
