/*Obtener o buscar elementos HTML desde JS
METODOS MODERNOS
querySelector() querySelectorAll (uno o todos)

METODOS TRADICIONALES
getElementById() => primer elemento por id
getElementByClass() => todos los elementos por clase
getElementsByTagName() => Busca elementos por etiquetas HTML
*/

const elementoP = document.getElementById("prueba");
const divContainer = document.querySelector(".container");

elementoP.style.color = "red";

// Insertar elemento HTML (img)
const imagen = document.createElement("img");
imagen.src="https://picsum.photos/300/600/?random";
imagen.alt="Texto alternativo";

// Agregar elementos creados a un objeto del DOM
divContainer.appendChild(imagen);

// Remover elementos del HTML
elementoP.remove();

// Propiedad windows

// alert("Mensaje");
// confirm("Está seguro?");
// open("https://google.com"); // puede ser bloqueado por adblocker
// print();
// prompt("Ingrese nombre");
// close();

// history.back();

console.log(document.URL);
document.write("Test"); // NO USAR
document.title="Título";

/**Eventos addEventListener("event", function(){})
 * 
 * keyPress
 * keyUp - keyDown
 * click
 * change
 * copy
 * cut
 * focus
 * online offline
 * play, pause, volumechange
 * scroll
 * submit
 * drag, drop
 */

const boton = document.getElementById("press");
boton.addEventListener("click",function(){
    const xy = document.querySelector(".ejemplo").style.color="green";

});