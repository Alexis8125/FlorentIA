// /src/scripts/seeNote.js
import { db } from "./firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";

window.addEventListener("DOMContentLoaded", async () => {
    const wrapper = document.getElementById("see-note");
    if (!wrapper) return;
    const noteId = wrapper.dataset.noteId;

    try {
        const docRef = doc(db, "notes", noteId);
        const snap = await getDoc(docRef);
        if (!snap.exists()) {
            wrapper.innerHTML = '<p>Nota no encontrada.</p>';
            return;
        }
        const note = { id: snap.id, ...snap.data() };

        // Fill fields
        document.getElementById("seeDate").textContent = new Date(note.fecha).toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById("seeLearning").textContent = note.aprendizaje;
        document.getElementById("seeEmotion").textContent = note.emocion + (note.motivo ? ` – ${note.motivo}` : "");
        document.getElementById("seeAchievement").textContent = note.logro;
        document.getElementById("seeThoughts").textContent = note.pensamientos;
        if (note.urlDibujo) {
            const section = document.getElementById("seeDrawingSection");
            section.style.display = "block";
            document.getElementById("seeDrawing").textContent = note.urlDibujo;
        }
    } catch (e) {
        console.error("Error loading note from Firestore:", e);
        wrapper.innerHTML = '<p>Error cargando la nota.</p>';
    }
});

