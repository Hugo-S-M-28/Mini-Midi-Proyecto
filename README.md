# Mini-Midi

Mini-Midi es una aplicacion web sencilla que funciona como un pequeno instrumento de percusion. Permite reproducir sonidos al hacer click en los botones de la pantalla o al usar teclas fisicas del teclado.

El proyecto esta pensado como practica para estudiantes que estan aprendiendo HTML, CSS y JavaScript basico.

## Caracteristicas

- Interfaz con 9 botones organizados en una cuadricula de 3 x 3.
- Reproduccion de sonidos usando la etiqueta HTML `<audio>`.
- Control con mouse mediante clicks en cada boton.
- Control con teclado fisico usando las teclas `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`.
- Efecto visual cuando una tecla esta activa.
- Codigo JavaScript simple, separado en funciones pequenas y comentado para facilitar el aprendizaje.
- Uso de `data-sound` para conectar cada boton con su sonido sin depender del orden de las clases CSS.

## Estructura del proyecto

```text
Mini-Midi-Proyecto/
|-- index.html
|-- main.js
|-- css/
|   |-- reset.css
|   `-- estilos.css
|-- images/
|   `-- bateria.png
`-- sounds/
    |-- keyq.wav
    |-- keyw.wav
    |-- keye.wav
    |-- keya.wav
    |-- keys.wav
    |-- keyd.wav
    |-- keyz.wav
    |-- keyx.wav
    `-- keyc.wav
```

## Como ejecutar el proyecto

No necesitas instalar dependencias ni ejecutar un servidor.

1. Abre la carpeta del proyecto.
2. Abre el archivo `index.html` en tu navegador.
3. Presiona los botones o usa el teclado fisico para reproducir sonidos.

Tambien puedes usar una extension como Live Server si estas editando el proyecto en Visual Studio Code, pero no es obligatorio.

## Controles

| Tecla fisica | Boton | Sonido |
| --- | --- | --- |
| `Q` | Pom | `sonido_tecla_pom` |
| `W` | Clap | `sonido_tecla_clap` |
| `E` | Tim | `sonido_tecla_tim` |
| `A` | Puff | `sonido_tecla_puff` |
| `S` | Splash | `sonido_tecla_splash` |
| `D` | Toim | `sonido_tecla_toim` |
| `Z` | Psh | `sonido_tecla_psh` |
| `X` | Tic | `sonido_tecla_tic` |
| `C` | Tom | `sonido_tecla_tom` |

## Como funciona

Cada boton del HTML tiene un atributo `data-sound`. Ese atributo guarda el nombre logico del sonido que debe reproducirse.

Ejemplo:

```html
<button class="tecla tecla_pom" data-sound="pom">Pom</button>
```

JavaScript lee ese valor y construye el selector del audio:

```js
#sonido_tecla_pom
```

Con esto, el codigo no depende del orden de las clases del boton. Si mas adelante se agregan nuevas clases CSS, el sonido seguira funcionando mientras `data-sound` mantenga el valor correcto.

## Archivos principales

- `index.html`: define la estructura de la pagina, los botones y los audios.
- `main.js`: conecta los eventos de click y teclado con la reproduccion de sonidos.
- `css/estilos.css`: define el diseno visual, la cuadricula del teclado y los estados activos.
- `css/reset.css`: limpia estilos predeterminados del navegador para que el diseno sea mas consistente.

## Dependencias

El proyecto no usa frameworks ni librerias externas de JavaScript.

La unica carga externa es la fuente Montserrat desde Google Fonts. Si no hay conexion a internet, la aplicacion seguira funcionando, pero el navegador usara una fuente alternativa.

## Nota para estudiantes

Este proyecto ayuda a practicar conceptos importantes:

- Seleccion de elementos con `document.querySelector` y `document.querySelectorAll`.
- Eventos de usuario como `click`, `keydown` y `keyup`.
- Uso de atributos personalizados con `dataset`.
- Manipulacion de clases CSS con `classList.add` y `classList.remove`.
- Reproduccion de audio con HTML y JavaScript.
- Organizacion de codigo en funciones pequenas.

Una buena mejora para practicar seria agregar mas sonidos siguiendo el mismo patron: nuevo boton, nuevo `data-sound`, nuevo audio y una nueva tecla en el mapa de JavaScript.
