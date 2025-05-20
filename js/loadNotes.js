// Usa import de CDN completo
import { db } from "/js/firebaseConfig.js";
import { 
  collection, 
  query, 
  getDocs, 
  orderBy 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
export async function renderNotes() {
  const code = localStorage.getItem("codigoEstudiante");
  if (!code) {
    console.error("Código no encontrado");
    return;
  }

  const container = document.getElementById("notes-container");
  if (!container) return;

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
    console.error("Error:", error);
    container.innerHTML = '<p class="error">Error al cargar notas</p>';
  }
}

window.renderNotes = renderNotes;