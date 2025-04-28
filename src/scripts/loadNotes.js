// /src/scripts/loadNotes.js

import { db } from "./firebaseConfig.js";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

/**
 * Fetches all notes from Firestore and renders them into the #notes-container.
 * Styles each card like the "Agregar Nota" card, with "Nota" at top and date at bottom.
 */
export async function renderNotes() {
    const container = document.getElementById("notes-container");
    if (!container) return;

    // Clear existing cards
    container.innerHTML = "";

    // Query notes ordered by fecha descending
    const notesQuery = query(
        collection(db, "notes"),
        orderBy("fecha", "desc")
    );

    try {
        const snapshot = await getDocs(notesQuery);
        snapshot.forEach(docSnap => {
            const note = { id: docSnap.id, ...docSnap.data() };

            // Create card anchor
            const card = document.createElement("a");
            card.href = `/Diary/${note.id}`;
            card.className = "activity-item special-card no-underline";

            // Icon container (reusing same plus icon style)
            const iconContainer = document.createElement("div");
            iconContainer.className = "icon-container";
            iconContainer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>`;
            card.appendChild(iconContainer);

            // Title at top
            const title = document.createElement("h2");
            title.textContent = "Nota";
            title.style.margin = "0";
            card.appendChild(title);

            // Spacer to push date to bottom
            const spacer = document.createElement("div");
            spacer.style.flex = "1";
            card.appendChild(spacer);

            // Date at bottom
            const dateText = document.createElement("p");
            dateText.className = "small-text";
            dateText.textContent = new Date(note.fecha).toLocaleDateString("es-ES");
            card.appendChild(dateText);

            container.appendChild(card);
        });
    } catch (e) {
        console.error("Error loading notes from Firestore:", e);
    }
}

// Expose to global scope
if (typeof window !== "undefined") {
    window.renderNotes = renderNotes;
}


