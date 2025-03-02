const boton = document.getElementById("mostrarVideo");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("mivideo");

boton.addEventListener("click", () => {
    // Alternamos la visibilidad del video
    if (videoContainer.classList.contains("oculto")) {
        videoContainer.classList.remove("oculto");
        video.play();  // Inicia el video cuando es visible
    } else {
        videoContainer.classList.add("oculto");
        video.pause();  // Pausa el video cuando se oculta
    }
});
