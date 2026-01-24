/*
  ARCHIVO: operadoresLogicos.js
  TEMA: Operadores lógicos en JavaScript

  En este ejemplo se utilizan:
  - Operador OR (||)
  - Operador AND (&&)
  - Condicionales if
  - Entrada de datos con prompt()
*/

// Se solicita al usuario que ingrese el día, mes y año.
// parseInt() se usa para convertir el texto ingresado en número.
let dia = parseInt(prompt("Ingrese día:"));
let mes = parseInt(prompt("Ingrese mes:"));
let año = parseInt(prompt("Ingrese año:"));

/*
  CONDICIÓN 1:
  Se evalúa si el mes ingresado corresponde
  al primer trimestre del año:
  - Enero (1)
  - Febrero (2)
  - Marzo (3)

  El operador OR (||) permite que la condición
  sea verdadera si SOLO UNA de las opciones se cumple.
*/
if (mes === 1 || mes === 2 || mes === 3) {
  alert("Estamos en el primer trimestre del año");
}

/*
  CONDICIÓN 2:
  Se evalúa si la fecha ingresada es 31 de diciembre.

  El operador AND (&&) exige que TODAS las condiciones
  se cumplan al mismo tiempo:
  - El día debe ser 31
  - El mes debe ser 12
*/
if (dia === 31 && mes === 12) {
  alert("Hoy es fin de año");
}
