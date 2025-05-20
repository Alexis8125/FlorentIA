// /src/scripts/saveNote.js
import { db } from "/js/firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

export async function saveDiaryEntry() {
    const code = localStorage.getItem("codigoEstudiante");
    if (!code) {
        alert("Debes iniciar sesión primero");
        return;
    }

    const noteData = {
        titulo: "Nota del " + new Date().toLocaleDateString('es-ES'),
        aprendizaje: document.getElementById("aprendizaje").value,
        emocion: document.getElementById("emocion").value,
        motivo: document.getElementById("motivo").value,
        logro: document.getElementById("logro").value,
        pensamientos: document.getElementById("pensamientos").value,
        codigo: code,
        fecha: new Date().toLocaleString("es-ES", {
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
        window.location.href = "/FlorentIA/Diary/";
    } catch (error) {
        console.error("Error al guardar:", error);
        alert("No se pudo guardar la nota");
    }
}

window.saveDiaryEntry = saveDiaryEntry;