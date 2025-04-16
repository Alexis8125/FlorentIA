// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgq36r1pfgHplUt7-HSIY_qNJiEybaIJc",
  authDomain: "florentia-f47b9.firebaseapp.com",
  projectId: "florentia-f47b9",
  storageBucket: "florentia-f47b9.firebasestorage.app",
  messagingSenderId: "59886187087",
  appId: "1:59886187087:web:d274071e62e43f00b5b03a",
  measurementId: "G-C1ZXW5QGQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);