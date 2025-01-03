// Función para reproducir sonido
function playSonido(idElementoAudio) {
    const elementoAudio = document.querySelector(idElementoAudio);
    if (elementoAudio && elementoAudio.tagName === "AUDIO") {
        elementoAudio.currentTime = 0; // Reinicia el audio para que se pueda reproducir desde el inicio
        elementoAudio.play();
    } else {
        console.error(`Elemento de audio no encontrado: ${idElementoAudio}`);
    }
}

// Selecciona la lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

// Itera sobre las teclas y agrega los eventos
listaDeTeclas.forEach((tecla) => {
    const instrumento = tecla.classList[1]; // Obtiene el nombre del instrumento
    const idAudio = `#sonido_${instrumento}`;

    // Asigna evento onclick para reproducir sonido
    tecla.onclick = () => playSonido(idAudio);

    // Agrega clase "activa" al presionar Enter o Space
    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('activa');
        }
    };

    // Remueve la clase "activa" al soltar la tecla
    tecla.onkeyup = () => tecla.classList.remove('activa');
});
