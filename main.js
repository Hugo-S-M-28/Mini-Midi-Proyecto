// Selecciona todos los botones del instrumento una sola vez.
// querySelectorAll devuelve una lista con cada elemento que tenga la clase .tecla.
const listaDeTeclas = document.querySelectorAll(".tecla");

// Relaciona cada tecla física con el nombre del sonido que debe activar.
// Los nombres coinciden con los valores data-sound del HTML y con el final del ID del audio.
const keySoundMap = {
    q: "pom",
    w: "clap",
    e: "tim",
    a: "puff",
    s: "splash",
    d: "toim",
    z: "psh",
    x: "tic",
    c: "tom"
};

// Tiempo, en milisegundos, durante el cual se mantiene el efecto visual
// cuando la nota se activa desde el teclado físico.
const ACTIVE_CLASS_DURATION = 150;

// Busca un elemento de audio por su selector y reproduce el sonido desde el inicio.
function playSoundById(audioSelector) {
    const audioElement = document.querySelector(audioSelector);

    // Esta validación evita errores silenciosos si el selector está mal escrito
    // o si el elemento existe pero no es una etiqueta <audio>.
    if (!audioElement || audioElement.tagName !== "AUDIO") {
        console.error(`Elemento de audio no encontrado: ${audioSelector}`);
        return;
    }

    // Reiniciar currentTime permite tocar la misma tecla varias veces seguidas
    // sin esperar a que el sonido anterior termine.
    audioElement.currentTime = 0;

    // play() devuelve una promesa. El catch evita errores no controlados en consola
    // si el navegador bloquea la reproducción por alguna política interna.
    audioElement.play().catch((error) => {
        console.error(`No se pudo reproducir el audio ${audioSelector}:`, error);
    });
}

// Recibe el nombre lógico del sonido y construye el selector del audio correspondiente.
function playSound(soundName) {
    playSoundById(`#sonido_tecla_${soundName}`);
}

// Quita la clase visual que simula una tecla presionada.
function removeActiveClass(button) {
    button.classList.remove("activa");
}

// Añade la clase visual .activa y programa su retirada automática.
// Esto permite que las teclas físicas tengan el mismo feedback visual que el mouse.
function activateButton(button) {
    button.classList.add("activa");
    setTimeout(() => removeActiveClass(button), ACTIVE_CLASS_DURATION);
}

// Maneja el click de un botón. El sonido se obtiene desde data-sound,
// así el JavaScript no depende del orden de las clases CSS del botón.
function handleButtonClick(button) {
    const soundName = button.dataset.sound;
    playSound(soundName);
}

// Maneja las teclas Enter y Space cuando un botón tiene foco.
// El navegador ya hace click en el botón con esas teclas; aquí solo damos feedback visual.
function handleButtonKeyDown(event, button) {
    if (event.code === "Space" || event.code === "Enter") {
        button.classList.add("activa");
    }
}

// Al soltar Enter o Space, se retira el feedback visual del botón enfocado.
function handleButtonKeyUp(button) {
    removeActiveClass(button);
}

// Maneja el teclado físico global: Q, W, E, A, S, D, Z, X y C.
function handleKeyDown(event) {
    const key = event.key.toLowerCase();
    const soundName = keySoundMap[key];

    // Si la tecla no está en el mapa, la app no necesita hacer nada.
    if (!soundName) {
        return;
    }

    const button = document.querySelector(`[data-sound="${soundName}"]`);

    if (!button) {
        console.error(`Botón no encontrado para el sonido: ${soundName}`);
        return;
    }

    playSound(soundName);
    activateButton(button);
}

// Recorre cada botón y conecta sus eventos.
// Usamos forEach porque todos los botones comparten el mismo comportamiento.
listaDeTeclas.forEach((button) => {
    button.addEventListener("click", () => handleButtonClick(button));
    button.addEventListener("keydown", (event) => handleButtonKeyDown(event, button));
    button.addEventListener("keyup", () => handleButtonKeyUp(button));
});

// Este listener vive en document para que las teclas físicas funcionen
// aunque ningún botón tenga foco en ese momento.
document.addEventListener("keydown", handleKeyDown);
