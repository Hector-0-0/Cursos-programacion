/*
ARCHIVO: concatenarDatos.js
TEMA: Concatenación de cadenas y métodos de salida
En este ejemplo se utilizan:
- Declaración de variables con 'let'
- Operador de suma (+) para concatenar
- Método .concat() de los objetos String
- Salida de datos en el documento HTML con document.write()
*/

let nombre = "Juan";
let apellido = "Pérez";
let precio = 500.0;

// Uso del operador "+" para unir cadenas de texto y variables
document.write("Nombre completo: " + nombre + " " + apellido + "<br>");

// Uso del método .concat() para una unión más formal de strings
let saludo = nombre.concat(" ", apellido);

// document.write también acepta múltiples argumentos separados por comas
document.write(nombre, " ", apellido, "<br>");