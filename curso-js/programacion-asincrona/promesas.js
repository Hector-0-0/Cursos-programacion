/*
ARCHIVO: promesas.js
TEMA: Promesas y Manejo de Asincronía Moderna
En este ejemplo se exploran:
- El ciclo de vida de una Promesa (Pending, Fulfilled, Rejected).
- Métodos de consumo: .then() para éxito y .catch() para errores.
- Promise.all(): Cómo ejecutar múltiples promesas en paralelo y esperar sus resultados.
- Encapsulamiento de peticiones HTTP (XMLHttpRequest) dentro de una Promesa.
- La naturaleza no bloqueante del código asincrónico.
*/

// 1. CREACIÓN Y CONSUMO DE UNA PROMESA BÁSICA
// Una promesa es un objeto que representa la finalización o el fracaso de una operación asincrónica
let miPromesa = new Promise(function(resolve, reject) {
    // Simulamos un proceso de red de 2 segundos
    setTimeout(function(){
        let error = false;
        if(error){
            // Si algo sale mal, llamamos a reject()
            reject("Hubo un error");
        } else {
            // Si todo sale bien, llamamos a resolve()
            resolve("Promesa cumplida");
        }
    }, 2000);   
});

// Consumimos la promesa
miPromesa
    .then(function(resultado) {
        // Se ejecuta si la promesa se resuelve (resolve)
        console.log(resultado);
    })
    .catch(function(error) {
        // Se ejecuta si la promesa falla (reject)
        console.log(error);
    });


// 2. MANEJO DE MÚLTIPLES PROMESAS (Promise.all)
let promesa1 = new Promise(function(resolve, reject) {
    // Tercer parámetro de setTimeout es el valor que se pasa a la función
    setTimeout(resolve, 3000, "Promesa 1 cumplida");
});

let promesa2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 7000, "Promesa 2 cumplida");
});

// Promise.all espera a que TODAS las promesas del arreglo se cumplan

Promise.all([promesa1, promesa2]).then(function(resultados){
    // resultados es un array con los datos de cada promesa en orden
    console.log(resultados[0]);
    console.log(resultados[1]);
});

// Demostración de no bloqueo: este log aparece ANTES que los resultados de las promesas
console.log("Esto se ejecuta antes de que se cumplan las promesas");


// 3. USO DE PROMESAS EN PETICIONES REALES (AJAX)
/**
 * Realiza una petición GET a una API externa y devuelve una Promesa.
 */
function obtenerUsuarios(){
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
        
        // Evento que se dispara al terminar la carga de la petición
        xhr.onload = function(){
            if(xhr.status === 200){
                 // Éxito: parseamos el texto a objeto JSON y resolvemos
                 resolve(JSON.parse(xhr.responseText));
            } else {
                // Error de servidor: rechazamos con un mensaje
                reject("Error al obtener los usuarios");
            }
        }
        
        xhr.send();
    });
}

// Ejecución de la función y manejo de su respuesta
obtenerUsuarios()
    .then(function(usuarios) {
        console.log("Usuarios obtenidos:", usuarios);
    })
    .catch(function(error) {
        console.error(error);
    });