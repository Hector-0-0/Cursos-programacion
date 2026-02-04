/*
ARCHIVO: losMagios.js
TEMA: Consumo de JSON y Manipulación del DOM en JavaScript
En este ejemplo se muestra cómo gestionar un resumen bancario de una organización:

1. Fetch API: Se utiliza para obtener datos asíncronos desde 'resumen.json'.
2. Manipulación del DOM: Uso de textContent para mostrar datos y appendChild para imágenes.
3. Estructuras de Datos: Acceso a arreglos anidados para mostrar saldos en diferentes monedas.

DATO IMPORTANTE: Al usar fetch, el primer .then convierte la respuesta a JSON 
y el segundo permite manipular los datos obtenidos de la "salida".
*/

let foto = document.createElement("img");
foto.src = "homero.jpg";

function consulta(){
    let datosjson;
    fetch("resumen.json")
        .then(respuesta => respuesta.json())
        .then((salida) => {

            datosjson=salida;

            document.getElementById("titular");
            titular.textContent=salida.titular;

            document.getElementById("no_miembro");
            no_miembro.textContent= "No. de miembro: " + salida.no_miembro;

            document.getElementById("direccion");
            direccion.textContent="Direccion: " + salida.direccion;

            document.getElementById("telefono");
            telefono.textContent="Telefono: " + salida.telefono;

            document.getElementById("email");
            email.textContent="Email: " + salida.email;

            document.getElementById("saldo_usd");
            saldo_usd.textContent="Saldo USD: " + salida.saldo[0].monto;

            document.getElementById("saldo_eu");
            saldo_eu.textContent="Saldo EU: " + salida.saldo[1].monto;
            
            document.getElementById("miembro_desde");
            miembro_desde.textContent="Miembro desde: " + salida.miembro_desde;

            let imagen = document.getElementById("foto");
            imagen.appendChild(foto);
        })
    
}