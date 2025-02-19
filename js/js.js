// variables de los elementos que necesito para mostrar el contenido
let contenedorPersonajeSolo = document.getElementById("personaje");
let contenedorPersonajes = document.getElementById("personajes");

// array de personajes
let personajesFotos = [
    "./multimedia/astroavatar0.jpg",
    "./multimedia/astroavatar1.jpg",
    "./multimedia/astroavatar2.jpg"
];

// mostrar foto del personaje por default
let imgPersonajeSolo = document.createElement("img");
imgPersonajeSolo.setAttribute("src", personajesFotos[0]); // seteo el src para la imagen inicial
imgPersonajeSolo.setAttribute("class", "avatar"); // clase para estilos
contenedorPersonajeSolo.appendChild(imgPersonajeSolo); // agrego la imagen al contenedor

// mostrar la barra de selección de personajes
for (let i = 0; i < personajesFotos.length; i++) {
    let muestroPersonajes = document.createElement("img");
    muestroPersonajes.setAttribute("src", personajesFotos[i]);
    muestroPersonajes.setAttribute("class", "avatares");
    contenedorPersonajes.appendChild(muestroPersonajes);
}

// cambiar imágenes para seleccionar una
let imagenesPersonajes = document.getElementsByClassName("avatares");
for (let i = 0; i < personajesFotos.length; i++) {
    imagenesPersonajes[i].addEventListener("click", function () {
        imgPersonajeSolo.src = personajesFotos[i]; // Cambiar la imagen principal
        jugador.avatar = personajesFotos[i]; // Actualizar el avatar del jugador
    });
}

// datos del jugador
const jugador = {
    nombre: "", // se actualizará en irpantalla2()             
    avatar: imgPersonajeSolo.getAttribute("src"), // Inicialmente, la primera imagen
    bienvenida: "Gracias por ofrecerte a salvar a nuestro querido planeta, como recompenza por tu acto de valentia, podes ir a visitar algunos lugares especiales, como un amanecer o disfrutar de una noche estrellada en un lugar muy lejano. Que disfrutes mucho tu viaje"
};

// pantallas
let pantalla1 = document.getElementById("bienvenida");
let pantalla2 = document.getElementById("pantalla2");
let nombre = document.getElementById("nombre");
let contenidoPantalla2 = document.getElementById("contenedor-pantalla2");

// pasar a la segunda pantalla
function irpantalla2() {
    const nombreInput = document.getElementById("username").value;

    // validar que el campo de entrada no esté vacío
    if (nombreInput.trim() === "") { //trim elimina los espacios vacios demas
        alert("por favor, ingresa tu nombre.");
        return; // detener la ejecución si el campo está vacío
    }

    // actualizar el nombre del jugador
    jugador.nombre = nombreInput;

    // actualizar el contenido del elemento #nombre en la pantalla 2
    nombre.textContent = jugador.nombre + " te doy la bienveida a esta nave";

    // crear la imagen del jugador en la pantalla 2
    let imgJugador = document.createElement("img");
    imgJugador.setAttribute("src", jugador.avatar); // Usar el avatar actualizado
    imgJugador.setAttribute("class", "avatar");

    // crear el texto de bienvenida en la pantalla 2
    let textoPantalla2 = document.createElement("p");
    textoPantalla2.textContent = jugador.bienvenida;

    // limpiar el contenedor de la pantalla 2 antes de agregar nuevos elementos
    contenidoPantalla2.innerHTML = "";

    // agregar la imagen y el texto al contenedor de la pantalla 2
    contenidoPantalla2.appendChild(imgJugador);
    contenidoPantalla2.appendChild(textoPantalla2);

    console.log("cambiando a pantalla 2");
    pantalla1.classList.add("dispnone");
    pantalla1.classList.remove("dispblock");
    pantalla2.classList.remove("dispnone");
    pantalla2.classList.add("dispflex");
}

// volver a la primera pantalla
function irpantalla1() {
    console.log("volviendo a pantalla 1");
    pantalla2.classList.add("dispnone");
    pantalla2.classList.remove("dispflex");
    pantalla1.classList.remove("dispnone");
    pantalla1.classList.add("dispblock");
}