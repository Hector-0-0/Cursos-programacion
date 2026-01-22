/*
  ARCHIVO: tiposDeDatos.js
  TEMA: Tipos de datos en JavaScript

  En este ejemplo se muestran los tipos de datos más comunes:
  - String (texto)
  - Number (número)
  - Boolean (verdadero / falso)
  - Null (valor nulo)
  - Object (objeto)
*/

// Variable de tipo String
let nombre = "Juan";

// Variable de tipo Number
let cantidad = 42;

// Variable de tipo Boolean
let esVerdadero = true;

// Variable de tipo Null (valor vacío intencional)
let esNulo = null;

// Variable de tipo Object
// Un objeto permite agrupar varios valores relacionados
let persona = {
  nombre: "Ana",
  edad: 30,
};

// Se muestran los valores en el navegador usando document.write
document.write(nombre);
document.write("<br>");

document.write(cantidad);
document.write("<br>");

document.write(esVerdadero);
document.write("<br>");

document.write(esNulo);
document.write("<br>");

// Acceso a propiedades del objeto
document.write(persona.nombre);
document.write("<br>");

document.write(persona.edad);
