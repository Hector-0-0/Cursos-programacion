/*
  ARCHIVO: switchCase.js
  TEMA: Estructura switch en JavaScript

  El switch se utiliza cuando una variable
  puede tomar varios valores específicos.
*/

let valor;

// Se solicita un valor numérico al usuario
valor = parseInt(prompt("Ingrese valor entre 1 y 3"));

/*
  El switch evalúa el valor ingresado
  y ejecuta el bloque correspondiente.
*/
switch (valor) {
  case 1:
    alert("El valor es 1");
    break;

  case 2:
    alert("El valor es 2");
    break;

  case 3:
    alert("El valor es 3");
    break;

  // Se ejecuta si ningún caso coincide
  default:
    alert("Valor no reconocido");
    break;
}
