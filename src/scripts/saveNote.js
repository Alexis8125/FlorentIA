// /src/scripts/saveNote.js

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

/**
 * Reads all form fields, prevents multiple notes per day, and stores note in Firestore.
 */
export async function saveDiaryEntry() {
    // Build ISO date string for today (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];

    // Query Firestore for any note with fecha on today's date
    const notesRef = collection(db, "notes");
    const start = today + "T00:00:00.000Z";
    const end = today + "T23:59:59.999Z";
    const q = query(notesRef,
        where("fecha", ">=", start),
        where("fecha", "<=", end)
    );
    const existing = await getDocs(q);
    if (!existing.empty) {
        alert("Ya hiciste tu nota del día");
        return;
    }

    // Read form values
    const now = new Date().toISOString();
    const learning = document.getElementById("aprendizaje").value;
    const emotion = document.getElementById("emocion").value;
    const reason = document.getElementById("motivo").value;
    const achievement = document.getElementById("logro").value;
    const thoughts = document.getElementById("pensamientos").value;
    const drawingInput = document.getElementById("dibujo");
    const drawingFileName = drawingInput.files[0]?.name || null;

    // Build note object matching Firestore fields
    const noteData = {
        aprendizaje: learning,
        emocion: emotion,
        motivo: reason,
        logro: achievement,
        pensamientos: thoughts,
        urlDibujo: drawingFileName,
        fecha: now,
        codigoEstudiante: String(Date.now())
    };

    try {
        await addDoc(notesRef, noteData);
        window.location.href = "/Diary";
    } catch (e) {
        console.error("Error guardando nota en Firestore: ", e);
        alert("Error al guardar la nota. Intenta de nuevo.");
    }
}

// Expose function globally so onclick can find it
if (typeof window !== "undefined") {
    window.saveDiaryEntry = saveDiaryEntry;
}

