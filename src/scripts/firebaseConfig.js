import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgq36r1pfgHplUt7-HSIY_qNJiEybaIJc",
    authDomain: "florentia-f47b9.firebaseapp.com",
    projectId: "florentia-f47b9",
    storageBucket: "florentia-f47b9.firebasestorage.app",
    messagingSenderId: "59886187087",
    appId: "1:59886187087:web:d274071e62e43f00b5b03a",
    measurementId: "G-C1ZXW5QGQC"   
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la base de datos Firestore
export const db = getFirestore(app);

