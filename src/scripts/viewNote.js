document.addEventListener("DOMContentLoaded", () => {
    const note = JSON.parse(localStorage.getItem("miNota"));

    if (note) {
        const fechaDiv = document.getElementById("mostrar-fecha");
        const contenidoDiv = document.getElementById("contenido-nota");

        fechaDiv.textContent = `📅 Fecha: ${note.date}`;
        contenidoDiv.innerHTML = `
            <p><strong>📘 Aprendizaje / Sentimientos:</strong> ${note.aprendizaje}</p>
            <p><strong>😊 Emoción:</strong> ${note.emocion}</p>
            ${note.motivo ? `<p><strong>¿Por qué?</strong> ${note.motivo}</p>` : ""}
            <p><strong>🎯 Logro:</strong> ${note.logro}</p>
            <p><strong>🧠 Pensamientos:</strong> ${note.pensamientos}</p>
            ${note.dibujo ? `<img src="${note.dibujo}" alt="Dibujo del día" class="mt-4 rounded shadow max-w-full"/>` : ""}
        `;
    }
});
