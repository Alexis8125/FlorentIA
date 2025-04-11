// scripts/verNota.js

window.addEventListener("DOMContentLoaded", () => {
    const parametros = new URLSearchParams(window.location.search);
    const fecha = parametros.get("fecha");

    if (fecha) {
        const nota = localStorage.getItem(`nota-${fecha}`);
        if (nota) {
            const datos = JSON.parse(nota);

            document.getElementById("aprendizaje").value = datos.aprendizaje;
            document.getElementById("emocion").value = datos.emocion;
            document.getElementById("motivo").value = datos.motivo;
            document.getElementById("logro").value = datos.logro;
            document.getElementById("pensamientos").value = datos.pensamientos;

            // Si quieres que solo se vea y no se edite:
            document.querySelectorAll("input, textarea").forEach((elemento) => {
                elemento.disabled = true;
            });

            // Ocultar el botón de guardar si ya es una nota cargada
            const botonGuardar = document.getElementById("boton-guardar");
            if (botonGuardar) {
                botonGuardar.style.display = "none";
            }
        }
    }
});
