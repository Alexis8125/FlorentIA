import { guardarNota } from "../../src/scripts/saveNote";

window.guardarNota = async function () {
    const nota = {
        aprendizaje: document.getElementById("aprendizaje").value,
        emocion: document.getElementById("emocion").value,
        motivo: document.getElementById("motivo").value,
        logro: document.getElementById("logro").value,
        pensamientos: document.getElementById("pensamientos").value,
    };

    const id = await guardarNota(nota);
    if (id) {
        alert("Nota guardada con éxito.");
        window.location.href = "/Diary"; // redirige a index
    } else {
        alert("Ocurrió un error al guardar la nota.");
    }
};
