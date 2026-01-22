/*
  ARCHIVO: operadoresMatematicos.js
  TEMA: Operadores matemáticos en JavaScript

  Operadores utilizados:
  +  suma
  -  resta
  *  multiplicación
  /  división
  %  residuo
  ** potencia
*/

let a, b, sum, res, mult, div, residuo, potencia;

// Entrada de datos
a = parseInt(prompt("Ingrese el valor de a:"));
b = parseInt(prompt("Ingrese el valor de b:"));

// Operaciones matemáticas
sum = a + b;
res = a - b;
mult = a * b;
div = a / b;
residuo = a % b;
potencia = a ** b;

// Salida de resultados
document.write("La suma de " + a + " + " + b + " es: " + sum);
document.write("<br>La resta de " + a + " - " + b + " es: " + res);
document.write("<br>La multiplicación de " + a + " * " + b + " es: " + mult);
document.write("<br>La división de " + a + " / " + b + " es: " + div);
document.write("<br>El residuo de " + a + " % " + b + " es: " + residuo);
document.write("<br>La potencia de " + a + " ** " + b + " es: " + potencia);
