// /src/scripts/loadNotes.js
import { db } from "./firebaseConfig.js";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

export async function renderNotes() {
    const code = localStorage.getItem("codigoEstudiante");
    if (!code) {
        console.error("Código no encontrado en localStorage");
        return;
    }

    const container = document.getElementById("notes-container");
    if (!container) {
        console.error("Contenedor #notes-container no existe");
        return;
    }

    try {
        const notesRef = collection(db, "users", code, "notes");
        const q = query(notesRef, orderBy("fecha", "desc"));
        const snapshot = await getDocs(q);

        container.innerHTML = snapshot.docs.map(doc => {
            const data = doc.data();
            return `
                <a href="/Diary/${doc.id}" class="activity-item special-card no-underline">
                    <div class="icon-container">📖</div>
                    <h2>${data.titulo || 'Nota'}</h2>
                    <p class="small-text">${data.fecha?.split(',')[0] || ''}</p>
                </a>
            `;
        }).join("") || '<p class="empty-notes">No hay notas todavía</p>';

    } catch (error) {
        console.error("Error crítico:", error);
        container.innerHTML = `<p class="error">Error al cargar notas. Recarga la página.</p>`;
    }
}

window.renderNotes = renderNotes;