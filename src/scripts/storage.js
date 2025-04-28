// /src/js/storage.js

const STORAGE_KEY = "florentia_diary_notes";

/** Obtiene array de notas (o [] si no hay). */
export function getNotes() {
    const json = localStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
}

/** Guarda array de notas. */
export function setNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

/** Añade una nota nueva (objeto) al storage. */
export function addNote(note) {
    const notes = getNotes();
    notes.push(note);
    setNotes(notes);
}
