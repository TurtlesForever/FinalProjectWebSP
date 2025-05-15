## 🏋️‍♂️ Fitness Tracker App

A full-stack fitness tracker built with Vue 3, Pinia, Express.js, PostgreSQL, and TailwindCSS.  
Users can log in, track activities, view stats, connect with friends, and admins can manage users and exercise types. Now includes dynamic friend tagging via Autocomplete (Oruga).

## 🚀 Live Demo

The Fitness Tracker App is deployed and fully functional. Built using Vue 3 with TailwindCSS on the frontend, and Node.js + PostgreSQL on the backend.  
A new Autocomplete feature using [Oruga UI](https://oruga-ui.com/components/Autocomplete.html) has been added to allow tagging friends when submitting activities.

🔗 Live App: [Fitness Tracker App on Render](https://final-fitness-tracker-app.onrender.com)  
🔗 GitHub Repository: [TurtlesForever/FinalProjectWebSP](https://github.com/TurtlesForever/FinalProjectWebSP)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## 📌 Features

✔️ User Authentication — Secure login with JWT and role-based access (User/Admin)
✔️ Personalized Dashboard — Track fitness logs and progress
✔️ Admin Panel — Manage users and exercise types
✔️ Activity Management — Add, edit, and delete workouts
✔️ Friend Features — View friends’ activities and tag them in new posts
✔️ Statistics Page — Visualize total and average metrics
✔️ Dynamic Autocomplete — Typeahead friend tagging powered by Oruga UI
✔️ Secure Storage — PostgreSQL database for all persistent data

## 🛠️ Tech Stack

Frontend: Vue 3, Pinia, Vue Router, TailwindCSS, Oruga UI  
Backend: Node.js, Express.js, PostgreSQL, JWT  
State Management: Pinia  
Deployment: Render (Fullstack Deployment)

## 📂 Project Structure

fitness-tracker/
├── client/ # Vue frontend
│ ├── src/
│ │ ├── components/ # Core UI components
│ │ ├── views/ # Pages like Dashboard, AdminPanel, etc.
│ │ ├── store/ # Pinia stores
│ │ ├── router/ # Vue Router config
│ │ ├── services/ # Centralized API handlers
│ │ └── firebaseConfig.js (optional)
│ ├── App.vue
│ ├── main.js
│ ├── tailwind.config.js
│ └── vite.config.js
│
├── server/ # Node/Express backend
│ ├── controllers/ # Logic for users, activities, etc.
│ ├── models/ # DB models
│ ├── routes/ # Express routes
│ ├── db/ # PostgreSQL config and init SQL
│ └── server.js # Entry point
│
├── .env # Environment variables
├── render.yaml # Deployment config
└── README.md # This file


## 🔄 Dynamic Autocomplete: Friend Tagging

A new feature was added using the [Oruga Autocomplete](https://oruga-ui.com/components/Autocomplete.html) component to dynamically suggest and tag friends when submitting a workout.  
It sends real-time queries to the backend as the user types, ensuring only relevant data is loaded into the browser.

Integrated in `TagFriends.vue`
Autocomplete options are fetched via Axios from `/api/friends/search?query=...`
Connected to the `taggedFriends` field in the activity form
Implemented a dynamic autocomplete textbox for tagging friends when submitting activities. Uses Oruga UI Autocomplete component in Vue 3, which queries the backend `/api/friends/search` route to fetch matching friend usernames as the user types

The backend searches the PostgreSQL users table using case-insensitive partial matches, returning a limited number of results to optimize performance.

This feature improves user interaction by allowing quick and easy friend tagging without loading the entire user database.

This dynamic approach allows tagging without downloading the entire user list, ensuring scalability and efficiency.

## 📝 What I Implemented

For this final in-class assignment, I added an autocomplete (typeahead) textbox to my fitness tracker web application using the Oruga UI Autocomplete component, which is compatible with Vue 3 and Bulma. This component allows users to tag friends while submitting a post (such as a workout or meal). The feature was integrated into the form where users log new activities.

The autocomplete dynamically fetches matching friend names from the server as the user types. I did not preload the entire friends list, since the instructions emphasized that the dataset may be too large. Instead, I set up a backend API endpoint that receives the partial query and returns matching friend suggestions. This ensures minimal data is sent to the client and the results are always up-to-date.

To complete this:

I installed Oruga UI and registered it in the project.

I created a FriendTagger.vue component that uses the <o-autocomplete> element.

I connected it to the backend via fetch to dynamically retrieve friend suggestions based on user input.

I used the v-model to bind the selected friend(s) to the parent form.

On form submission, the tagged friends are included in the payload and handled by the backend as part of the post.

This implementation respects best practices of efficiency and usability while complying fully with the assignment's constraints.

## 🔒 Authentication & Authorization

JWT-based token system
Role-based access control
Protected routes on both client and server
Users may only modify their own data

## 📄 Environment Variables Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/TurtlesForever/FinalProjectWebSP.git
   cd fitness-tracker

2. Create .env files in both client and server:
    # .env for server
    DATABASE_URL=postgresql://username:password@host:port/dbname
    JWT_SECRET=your_jwt_secret

    # Optional Firebase config
    VITE_FIREBASE_API_KEY=your-firebase-api-key
    VITE_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    VITE_FIREBASE_PROJECT_ID=your-firebase-project-id

    PORT=8080

3. Install dependencies:
    cd client
    npm install
    cd ../server
    npm install

4. Run the app locally:
    # Start frontend
    cd client
    npm run dev

    # Start backend
    cd ../server
    npm start

## ✅ Project Requirements Checklist

✔️ Full-stack (client + server)
✔️ Three controllers with models
✔️ Full CRUD functionality
✔️ PostgreSQL integration
✔️ MVC structure
✔️ JWT authentication & authorization
✔️ API abstraction layer
✔️ .env file usage
✔️ Live deployment
✔️ Responsive UI
✔️ Third-party autocomplete for friend tagging

## 🧪 Testing Autocomplete Feature

To test the new friend tagging feature:

1. Log in with a user that has friends.
2. Go to the “Add Activity” form.
3. Start typing a friend’s name in the “Tag Friends” field.
4. You should see suggestions from the server in real-time.
5. Submit the form with one or more tagged friends.

## 📣 Final Notes

This project demonstrates full-stack development, secure API design, clean Vue component architecture, and integration of external UI libraries for enhanced UX.

Built with modularity and scalability in mind
Uses real-time queries for friend tagging
Easily extensible for future features

## ✨ License

This project is licensed for educational use only.

## 🙌 Thank You!

Thanks for exploring the Fitness Tracker App! 💪