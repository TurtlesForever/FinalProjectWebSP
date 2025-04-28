🏋️‍♂️ Fitness Tracker App

A full-stack fitness tracker app built with Vue 3, Pinia, Express.js, PostgreSQL, and TailwindCSS.
Users can log in, track activities, view statistics, and connect with friends. Admins can manage users and activity types.

🚀 Live Demo

I’ve completed the Fitness Tracker App as part of my final project. The app is fully functional with a front-end built in Vue 3, utilizing TailwindCSS for styling, and the back-end is powered by Node.js and PostgreSQL. You can check out the live app on Render and explore the source code on GitHub.

🔗 Deployed on Render: [Fitness Tracker App](https://finalprojectwebsp.onrender.com)
🔗 GitHub Repository: [TurtlesForever/FinalProjectWebSP](https://github.com/TurtlesForever/FinalProjectWebSP/tree/main)

📌 Features

✔️ User Authentication: Secure login system with role-based access (User/Admin) using JWT.
✔️ Personalized Dashboard: Users can view and manage their own activity logs.
✔️ Admin Panel: Admins can manage users and exercise types.
✔️ Activity Management: Users can add, edit, and delete their workouts.
✔️ Friends Feature: View and connect with friends’ activity logs.
✔️ Statistics Page: Visualize workout stats (totals, averages).
✔️ Secure Storage: All data stored safely in a PostgreSQL database.

🛠️ Tech Stack

Frontend: Vue 3, Pinia, Vue Router, TailwindCSS
Backend: Node.js, Express.js, PostgreSQL, JWT
State Management: Pinia
Hosting: Render (Frontend + Backend)

📂 Project Structure

fitness-tracker/
│
├── client/
│   ├── dist/
│   │   ├── server.js
│   │   ├── Vue.js
│   ├── src/
│   │   ├── components/         # Vue components (Login, Dashboard, AdminPanel, etc.)
│   │   ├── services/            # Centralized API service (apiService.js)
│   │   ├── store/               # Pinia stores for user and activity state
│   │   ├── router/              # Vue Router setup
│   │   ├── firebaseConfig.js    # (Optional) Firebase setup if used
│   │   ├── App.vue
│   │   ├── main.js
│   ├── public/
│   │   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── Vite
│
├── server/
│   ├── controllers/             # User, Activity, ExerciseType controllers
│   ├── models/                  # User, Activity, ExerciseType models
│   ├── routes/                  # Routes for Users, Activities, Exercise Types
│   ├── db/                      # db.js (PostgreSQL connection)
│   │   ├── tables.sql
│   ├── package.json
│
├── .env
├── GitHub
│── README.md
├── vue-fitness-tracker
├── vue.js

🔒 Authentication & Authorization

JWT tokens used for verifying users.
Users can only modify their own data.
Admins have additional privileges to manage users.
Access control rules are strictly enforced at the server level.

📄 Environment Variables Setup

1. Clone the Repository

git clone https://github.com/TurtlesForever/FinalProjectWebSP.git
cd fitness-tracker

2. Set up environment variables (.env):

DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_key (if using)
RENDER_EXTERNAL_URL=https://your-render-app-url.com

For example:

cp .env.example .env
require('dotenv').config();

# 📂 .env.example

# PostgreSQL database URL
DATABASE_URL=postgresql://username:password@hostname:port/databasename

# JWT secret for signing authentication tokens
JWT_SECRET=your_super_secret_key_here

# Render deployment base URL (for example, if your app is hosted on Render)
RENDER_URL=https://your-app-on-render.com

# (Optional) Firebase API config if you use Firebase Authentication
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
VITE_FIREBASE_PROJECT_ID=your-firebase-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-firebase-sender-id
VITE_FIREBASE_APP_ID=your-firebase-app-id

# Port your server will run on (defaults to 3000 or 8080 typically)
PORT=8080

3. Install dependencies:

cd client
npm install
cd ../server
npm install

4. Start development servers:

cd client
npm run dev
cd ../server
npm run start

5. Push to GitHub and Deploy on Render 🚀

✨ License

This project is licensed for educational purposes.

✅ Project Requirements (based on assignment)

✔️ Fullstack app (client + server)
✔️ Three controllers (Users, Activities, Exercise Types) each with matching models
✔️ CRUD functionality for all main resources
✔️ Database (PostgreSQL) with centralized access
✔️ Proper MVC structure
✔️ JWT Authentication and Authorization
✔️ Centralized client-server communication
✔️ .env file and environment variables properly managed
✔️ Hosted and working on Render
✔️ Clean UI for managing users, activities, stats

📣 Final Notes

This project is a complete upgrade from the frontend-only version to a robust fullstack application.
It follows professional coding practices, including separation of concerns, secure data handling, environment variable use, and user-based data ownership enforcement.

🙌 Thank You for Checking Out the Fitness Tracker!