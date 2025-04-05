document.addEventListener("DOMContentLoaded", () => {
    // Datos estáticos de ejemplo para las tareas
    const tasksData = [
        { id: 1, delivered: true },
        { id: 2, delivered: false },
        { id: 3, delivered: true }
    ];

    // Seleccionamos todas las firmas de tareas dentro del contenedor de tareas
    const taskElements = document.querySelectorAll(".tasks .component .signature");

    taskElements.forEach((element, index) => {
        if (tasksData[index]) {
            // Suponemos que en cada <Signature> el primer <span> es el título y el segundo es el estado
            const spans = element.querySelectorAll("span");
            if (spans.length >= 2) {
                const statusSpan = spans[1];
                if (tasksData[index].delivered) {
                    statusSpan.textContent = "Entregada";
                    statusSpan.style.color = "green";
                } else {
                    statusSpan.textContent = "Pendiente";
                    statusSpan.style.color = "red";
                }
            }
        }
    });
});

function changeColor() {
    // selecciona todos los spans con clase 'text'
    const tasks = document.querySelectorAll(".text");

    tasks.forEach((task) => {
        task.style.color = "#288b98"; // cambia el color
    });
}

// Ejecuta cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", changeColor);

