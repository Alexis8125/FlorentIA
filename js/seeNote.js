import { db } from "/js/firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

window.addEventListener("DOMContentLoaded", async () => {
    // Obtener code del usuario
    const userAuth = firebase.auth().currentUser;
    const userDoc = await getDoc(doc(db, "users", userAuth.uid));
    const userCode = userDoc.data().code;

    // Obtener ID de la nota desde la URL
    const noteId = window.location.pathname.split("/").pop();

    // Verificar que la nota pertenezca al usuario
    const noteRef = doc(db, "users", userCode, "notes", noteId);
    const noteSnap = await getDoc(noteRef);

    if (noteSnap.exists() && noteSnap.data().code === userCode) {
        // Mostrar nota
    } else {
        alert("No tienes permisos para ver esta nota.");
    }
});

