/*
ARCHIVO: axios.js
TEMA: Consumo de APIs y Renderizado en el DOM con Axios
En este ejemplo se exploran:
- Uso del método axios.get() para obtener colecciones de datos.
- Acceso directo a la propiedad 'data' de la respuesta.
- Iteración de arreglos (arrays) mediante bucles for.
- Manipulación dinámica del DOM: createElement y appendChild.
- Inserción de datos asíncronos en elementos de lista (<li>).
*/

// 1. URL base de la API (JSONPlaceholder es un servicio de pruebas)
const url = "https://jsonplaceholder.typicode.com/posts";

/**
 * Función que obtiene información de una URL y la pinta en un HTML
 * @param {string} url - Dirección de la API
 */
function obtenerInfo(url) {
    // Realizamos la petición GET
    axios.get(url)
    .then(respuesta => {
        // Obtenemos la referencia del contenedor en el HTML (un <ul> o <ol>)
        let listaInformacion = document.getElementById("ListaInfo");
        
        // El servidor devuelve un Array de objetos en respuesta.data
        // Recorremos el arreglo para procesar cada post individualmente
        for(let f = 0; f < respuesta.data.length; f++) {
            // Creamos un nuevo elemento de lista en memoria
            let elemento = document.createElement("li");
            
            // Asignamos el título del post al texto del elemento
            // respuesta.data[f] accede al objeto actual del bucle
            elemento.innerText = respuesta.data[f].title;
            
            // Insertamos el <li> dentro del contenedor padre en el DOM
            listaInformacion.appendChild(elemento);
        }
        
        console.log("Datos renderizados con éxito.");
    })
    .catch(error => {
        // Si hay error de red o de servidor (4xx/5xx), Axios lo captura aquí
        console.log("Error al obtener la información: ", error);
    });
}

// Nota: Para que funcione, recuerda llamar a la función:
// obtenerInfo(url);