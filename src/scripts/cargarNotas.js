document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("notas-guardadas");

    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("nota-")) {
            const fecha = key.replace("nota-", "");
            const div = document.createElement("a");
            div.href = `/Diary/nota?fecha=${encodeURIComponent(fecha)}`;
            div.className = "activity-item no-underline";
            div.innerHTML = `<h2>${fecha}</h2>`;
            container.appendChild(div);
        }
    });
});
