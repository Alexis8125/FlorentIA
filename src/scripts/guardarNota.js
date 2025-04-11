// scripts/guardarNota.js

window.addEventListener("DOMContentLoaded", () => {
    const fechaSpan = document.getElementById("fecha");
    const fechaActual = new Date().toLocaleDateString("es-ES");

    if (fechaSpan) {
        fechaSpan.textContent = fechaActual;
    }

    window.guardarNota = function () {
        const entrada = {
            fecha: fechaActual,
            aprendizaje: (document.getElementById("aprendizaje")).value,
            emocion: (document.getElementById("emocion")).value,
            motivo: (document.getElementById("motivo")).value,
            logro: (document.getElementById("logro")).value,
            pensamientos: (document.getElementById("pensamientos")).value,
        };

        localStorage.setItem(`nota-${fechaActual}`, JSON.stringify(entrada));
        window.location.href = `/Diary/nota?fecha=${encodeURIComponent(fechaActual)}`;

    };
});
