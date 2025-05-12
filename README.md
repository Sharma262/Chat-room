# 🗨️ React Firebase Chat Application

A real-time chat application built with **React.js** and **Firebase**, featuring Google email authentication, room creation, and live chat updates.

## ✨ Features

- 🔐 Google Authentication (email only)
- 🏠 Room creation for group chats
- 💬 Real-time messaging using Firebase Firestore
- 🚪 Sign out functionality
- 🍪 Session management using `universal-cookie`

## 🔧 Tech Stack

- React.js
- Firebase (Authentication + Firestore)
- universal-cookie

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up Firebase**

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable **Authentication > Sign-in method > Google**
- Create a **Firestore Database**
- Get your Firebase config credentials

4. **Add Firebase config**

Create a file named `firebase.config.js` in the root or `src` directory:

```js
// firebase.config.js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

## 🚀 Running the App

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📱 App Flow

1. **Login / Signup**
   - Authenticate using your Google account.
2. **Create a Chat Room**
   - Choose a name for your chat room and start chatting.
3. **Real-Time Messaging**
   - All messages are updated in real-time using Firestore.
4. **Sign Out**
   - Securely sign out from the app.
