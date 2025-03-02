const boton = document.getElementById("mostrarVideo");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("miVideo");

boton.addEventListener("click", () => {
    videoContainer.classlist.contains("oculto"); 

    if (!videoContainer.classlist.toggle("oculto")) {
        video.play();
    } else {
        video.pause();
    }
});