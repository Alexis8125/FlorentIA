// /src/scripts/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgq36r1pfgHplUt7-HSIY_qNJiEybaIJc",
    authDomain: "florentia-f47b9.firebaseapp.com",
    projectId: "florentia-f47b9",
    storageBucket: "florentia-f47b9.appspot.com",
    messagingSenderId: "59886187087",
    appId: "1:59886187087:web:d274071e62e43f00b5b03a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);