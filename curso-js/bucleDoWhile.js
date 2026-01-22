/*
ARCHIVO: bucleDoWhile.js
TEMA: Estructura Do-While y Validación de Datos
En este ejemplo se utilizan:
- Bucle que garantiza al menos una ejecución (do)
- Captura de datos con prompt()
- Operadores lógicos (&&) y de comparación (===, !==)
- Control de flujo con una variable "bandera" (control)
*/

let usuario, clave, control;
control = 0;

do {
    usuario = prompt("Ingrese su nombre de usuario:");
    clave = prompt("Ingrese su clave:");

    // Validación de credenciales
    if (usuario === "admin" && clave === "1234") {
        alert("¡Bienvenido, " + usuario + "!");
        control = 1; // Cambiamos el valor para salir del bucle
    } else {
        alert("Usuario o clave incorrectos. Intente nuevamente.");
    }
} while(control !== 1); // El ciclo se repite mientras el acceso sea denegado