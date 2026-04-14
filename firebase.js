import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

// 🔥 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBtsJ9rVqJWE93hPW7fYNQu25NVGX8FYuw",
  authDomain: "smart-irrigation-system-e649a.firebaseapp.com",
  databaseURL: "https://smart-irrigation-system-e649a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-irrigation-system-e649a",
  storageBucket: "smart-irrigation-system-e649a.appspot.com",
  messagingSenderId: "1001835662661",
  appId: "1:1001835662661:web:dc866bb3f72ae50eadc22c",
  measurementId: "G-GJKFJW2Z71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
