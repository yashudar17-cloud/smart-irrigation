// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtsJ9rVqJWE93hPW7fYNQu25NVGX8FYuw",
  authDomain: "smart-irrigation-system-e649a.firebaseapp.com",
  databaseURL: "https://smart-irrigation-system-e649a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-irrigation-system-e649a",
  storageBucket: "smart-irrigation-system-e649a.firebasestorage.app",
  messagingSenderId: "1001835662661",
  appId: "1:1001835662661:web:dc866bb3f72ae50eadc22c",
  measurementId: "G-GJKFJW2Z71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);