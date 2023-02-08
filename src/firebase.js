// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj3H1phSDgeaLccbt4rFhUIwBPAkhy11Q",
  authDomain: "frc-scouting-2023-2d808.firebaseapp.com",
  databaseURL: "https://frc-scouting-2023-2d808-default-rtdb.firebaseio.com",
  projectId: "frc-scouting-2023-2d808",
  storageBucket: "frc-scouting-2023-2d808.appspot.com",
  messagingSenderId: "80127584641",
  appId: "1:80127584641:web:ebac9d2703c5eb362e2080",
  measurementId: "G-YR58DYNBN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);