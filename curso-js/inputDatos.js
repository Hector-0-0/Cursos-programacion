/*
  ARCHIVO: inputDatos.js
  TEMA: Entrada de datos del usuario
  
  En este ejemplo se utilizan:
  - prompt() para solicitar datos al usuario
  - Variables con let para almacenar información
  - Concatenación de strings con el operador +
  - document.write() para mostrar el resultado
*/

// Se declaran las variables que almacenarán los datos del usuario
let nombre, edad;

/*
  FUNCIÓN prompt()
  Muestra una ventana emergente donde el usuario puede escribir.
  El texto ingresado se guarda como STRING (texto).
  
  Sintaxis: prompt("Mensaje a mostrar")
*/

// Se solicita el nombre del usuario
nombre = prompt("Ingrese su nombre:");

// Se solicita la edad del usuario
edad = prompt("Ingrese su edad:");

/*
  CONCATENACIÓN DE STRINGS
  El operador + se usa para unir (concatenar) textos.
  
  En este ejemplo se combinan:
  - Texto fijo: "Hola " y ", tienes " y " años"
  - Variables: nombre y edad
  
  Resultado esperado: "Hola Juan, tienes 25 años"
*/
document.write("Hola " + nombre + ", tienes " + edad + " años");