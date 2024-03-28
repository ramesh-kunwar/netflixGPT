// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQojYn-oHC4ljgKl99S_C9a5minxCefo",
  authDomain: "netflixgpt-54033.firebaseapp.com",
  projectId: "netflixgpt-54033",
  storageBucket: "netflixgpt-54033.appspot.com",
  messagingSenderId: "463925546339",
  appId: "1:463925546339:web:3a1f81ae5477eec51e5756",
  measurementId: "G-H8KC6K5MJL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
