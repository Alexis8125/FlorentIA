import { db } from "/src/scripts/firebaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

export async function saveDiaryEntry() {
    const code = localStorage.getItem("codigoEstudiante");
    if (!code) {
        alert("Debes iniciar sesión primero");
        return;
    }

    const noteData = {
        aprendizaje: document.getElementById("aprendizaje").value,
        emocion: document.getElementById("emocion").value,
        logro: document.getElementById("logro").value,
        pensamientos: document.getElementById("pensamientos").value,
        code: code,
        fecha: new Date().toLocaleString("es-ES", { // Formato legible
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
        })
    };

    try {
        await addDoc(collection(db, "users", code, "notes"), noteData);
        window.location.href = "/Diary?refresh=true";
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("No se pudo guardar la nota");
    }
}

window.saveDiaryEntry = saveDiaryEntry;