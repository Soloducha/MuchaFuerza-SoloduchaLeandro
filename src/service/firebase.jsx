// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//   apiKey: "AIzaSyCQkO5Ut4ZSLKguNeGR6-ScRMm8jh7Ovoc",
//si uso vartiable de entorno:
//   apiKey:  import.meta.env.VITE_API_KEY,
const firebaseConfig = {
  apiKey: "AIzaSyCQkO5Ut4ZSLKguNeGR6-ScRMm8jh7Ovoc",
  authDomain: "mucha-fuerza.firebaseapp.com",
  projectId: "mucha-fuerza",
  storageBucket: "mucha-fuerza.firebasestorage.app",
  messagingSenderId: "284743575240",
  appId: "1:284743575240:web:0a4713b087a40702e1e7fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
