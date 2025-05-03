import { db } from "/src/scripts/firebaseConfig.js";
import { collection, query, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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
        // 1. Obtener notas SIN ordenar (temporalmente)
        const notesRef = collection(db, "users", code, "notes");
        const snapshot = await getDocs(notesRef);

        // 2. Convertir a array y ordenar manualmente
        const notes = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            notes.push({
                id: doc.id,
                ...data,
                // Convertir fecha string a objeto Date (para ordenar)
                fechaDate: parseCustomDate(data.fecha) 
            });
        });

        // 3. Ordenar por fecha (nuevo a viejo)
        notes.sort((a, b) => b.fechaDate - a.fechaDate);

        // 4. Renderizar
        container.innerHTML = notes.map(note => `
            <a href="/Diary/${note.id}" class="activity-item special-card no-underline">
                <div class="icon-container">📖</div>
                <h2>Nota</h2>
                <p class="small-text">${formatDateForDisplay(note.fecha)}</p>
            </a>
        `).join("");

    } catch (error) {
        console.error("Error crítico:", error);
        container.innerHTML = `<p class="error">Error al cargar notas. Recarga la página.</p>`;
    }
}

// Helper para convertir tu formato de fecha string a Date
function parseCustomDate(dateStr) {
    // Ejemplo: "3 de mayo de 2025, 10:59:17 a.m. UTC-5"
    const months = {
        'enero': 0, 'febrero': 1, 'marzo': 2, 'abril': 3, 
        'mayo': 4, 'junio': 5, 'julio': 6, 'agosto': 7,
        'septiembre': 8, 'octubre': 9, 'noviembre': 10, 'diciembre': 11
    };
    
    const parts = dateStr.split(/ de |, | /);
    const day = parseInt(parts[0]);
    const month = months[parts[1].toLowerCase()];
    const year = parseInt(parts[3]);
    
    return new Date(year, month, day);
}

// Helper para formatear fecha para mostrar
function formatDateForDisplay(dateStr) {
    return dateStr.split(",")[0]; // Ej: "3 de mayo de 2025"
}

window.renderNotes = renderNotes;