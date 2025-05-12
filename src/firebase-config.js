// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAigf7BGCGKMiXfqGBWU22HuaB0At3pqkI",
  authDomain: "chat-room-6cd2d.firebaseapp.com",
  projectId: "chat-room-6cd2d",
  storageBucket: "chat-room-6cd2d.firebasestorage.app",
  messagingSenderId: "596377287670",
  appId: "1:596377287670:web:964a32abbec32076c825d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);