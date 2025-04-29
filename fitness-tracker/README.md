## 🏋️‍♂️ Fitness Tracker App

A full-stack fitness tracker built with Vue 3, Pinia, Express.js, PostgreSQL, and TailwindCSS.
Users can log in, track activities, view statistics, connect with friends, and admins can manage users and exercise types.

## 🚀 Live Demo

I’ve completed the Fitness Tracker App as part of my final project. The app is fully functional with a front-end built in Vue 3, utilizing TailwindCSS for styling, and the back-end is powered by Node.js and PostgreSQL. You can check out the live app on Render and explore the source code on GitHub.

🔗 Deployed on Render: [Fitness Tracker App](https://final-fitness-tracker-app.onrender.com)
🔗 GitHub Repository: [TurtlesForever/FinalProjectWebSP](https://github.com/TurtlesForever/FinalProjectWebSP/tree/main)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 📌 Features

✔️ User Authentication — Secure login with JWT and role-based access (User/Admin).
✔️ Personalized Dashboard — Manage and view individual fitness logs.
✔️ Admin Panel — Manage users and available exercise types.
✔️ Activity Management — Add, edit, delete workouts.
✔️ Friends Feature — View and connect with friends' activity logs.
✔️ Statistics Page — Visualize workout totals and averages.
✔️ Secure Storage — PostgreSQL database handling all persistent data.

## 🛠️ Tech Stack

Frontend: Vue 3, Pinia, Vue Router, TailwindCSS
Backend: Node.js, Express.js, PostgreSQL, JWT
State Management: Pinia
Hosting: Render (Fullstack Deployment)

## 📂 Project Structure

fitness-tracker/
├── client/               # Frontend Vue app
│   ├── src/
│   │   ├── components/    # Login, Dashboard, AdminPanel, etc.
│   │   ├── services/      # Centralized API calls (apiService.js)
│   │   ├── store/         # Pinia stores (user, activity)
│   │   ├── router/        # Vue Router config
│   │   └── firebaseConfig.js (optional)
│   ├── dist/              # Built files (after npm run build)
│   │   ├── index.html
│   │
│   ├── App.vue
│   ├── main.js
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/               # Backend Express server
│   ├── controllers/       # Users, Activities, ExerciseTypes
│   ├── models/            # Database models
│   ├── routes/            # API endpoints
│   ├── db/                # PostgreSQL connection and tables.sql
│   ├── server.js          # Main Express server
│   └── package.json
│
├── render.yaml
├── .env                   # Environment variables
└── README.md              # This file

## 🔒 Authentication & Authorization

JWT tokens securely authenticate users.
Users can only modify their own activities.
Admins have additional privileges.
Strict access control enforced at the server level.

## 📄 Environment Variables Setup

1. Clone the Repository

git clone https://github.com/TurtlesForever/FinalProjectWebSP.git
cd fitness-tracker

2. Create and configure a .env file:

Example .env:

# PostgreSQL
DATABASE_URL=postgresql://username:password@hostname:port/databasename

# JWT
JWT_SECRET=your_jwt_secret_key

# Firebase (optional)
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id

# Deployment
RENDER_URL=https://your-app-on-render.com
PORT=8080

3. Install dependencies:

cd client
npm install
cd ../server
npm install

4. Run locally:

cd client
npm run dev
cd ../server
npm start

## ✅ Project Requirements Checklist

✔️ Full-stack app (client + server)
✔️ Three controllers with matching models
✔️ Full CRUD functionality
✔️ Secure database integration (PostgreSQL)
✔️ MVC structure
✔️ JWT Authentication & Authorization
✔️ Centralized API communication
✔️ Proper .env and environment management
✔️ Live deployment on Render
✔️ Clean, responsive UI

## 📣 Final Notes

This project evolves the original frontend-only fitness tracker into a full-fledged full-stack application, with secure authentication, scalable architecture, and professional practices including:

Environment configuration
MVC backend structure
Separation of concerns
Secure user-specific data handling

## ✨ License

This project is licensed for educational purposes.

## 🙌 Thank you for checking out the Fitness Tracker App!