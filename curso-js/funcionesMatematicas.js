/*
  ARCHIVO: funcionesMatematicas.js
  TEMA: Objeto Math y funciones matemáticas en JavaScript
  
  En este ejemplo se utilizan:
  - Métodos del objeto Math: sqrt(), pow(), random(), ceil(), floor()
  - Métodos de redondeo y aproximación
  - Generación de números aleatorios
  - Constantes matemáticas (Math.PI)
*/

/*
  MÉTODO Math.sqrt(numero)
  Calcula la raíz cuadrada de un número.
  sqrt significa "square root" (raíz cuadrada en inglés)
  
  Ejemplo: Math.sqrt(25) → 5
  Porque 5 × 5 = 25
*/
const precio = 156.54;
document.write("Precio redondeado: " + precioRedondeado);
document.write("<br>");

/*
  MÉTODO Math.ceil(numero)
  Redondea un número HACIA ARRIBA al entero más cercano.
  ceil significa "techo" en inglés.
  
  Ejemplo: Math.ceil(4.1) → 5
  Ejemplo: Math.ceil(4.9) → 5
  Siempre redondea hacia arriba, sin importar los decimales.
*/
var precioRedondeadoArriba = Math.ceil(precio);
document.write("Precio redondeado hacia arriba: " + precioRedondeadoArriba);
document.write("<br>");

/*
  MÉTODO Math.floor(numero)
  Redondea un número HACIA ABAJO al entero más cercano.
  floor significa "piso" en inglés.
  
  Ejemplo: Math.floor(4.1) → 4
  Ejemplo: Math.floor(4.9) → 4
  Siempre redondea hacia abajo, eliminando los decimales.
*/
var precioRedondeadoAbajo = Math.floor(precio);
document.write("Precio redondeado hacia abajo: " + precioRedondeadoAbajo);
document.write("<br>");

/*
  MÉTODO Math.sqrt(numero)
  Calcula la raíz cuadrada de un número.
  
  Ejemplo: Math.sqrt(16) → 4
  Porque 4 × 4 = 16
*/
var raizCuadrada = Math.sqrt(precio);
document.write("Raíz cuadrada: " + raizCuadrada);
document.write("<br>");

/*
  MÉTODO Math.pow(base, exponente)
  Eleva un número (base) a una potencia (exponente).
  pow significa "power" (potencia en inglés)
  
  Ejemplo: Math.pow(2, 3) → 8
  Porque 2³ = 2 × 2 × 2 = 8
*/
var anguloEnGrados = angulo * (Math.PI / 180);
document.write("Ángulo: " + angulo + " grados = " + anguloEnGrados);
document.write("<br>");

/*
  MÉTODO Math.random()
  Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
  
  Ejemplo: Math.random() → 0.7453829
  
  Para obtener números en rangos específicos:
  - Entre 0 y 100: Math.random() * 100
  - Entre 1 y 10: Math.floor(Math.random() * 10) + 1
*/
var numeroAleatorio = Math.random();
document.write("Número aleatorio entre 0 y 1: " + numeroAleatorio);
document.write("<br>");

/*
  GENERAR NÚMEROS ALEATORIOS EN UN RANGO
  
  Fórmula para números entre min y max:
  Math.random() * (max - min) + min
  
  Si queremos enteros, usamos Math.floor():
  Math.floor(Math.random() * (max - min + 1)) + min
*/
var minimo = Math.min(10, 5, 8, 2, 1);
document.write("Valor mínimo: " + minimo);
document.write("<br>");

/*
  MÉTODO Math.max(n1, n2, n3, ...)
  Devuelve el MAYOR de los números proporcionados.
  
  Ejemplo: Math.max(10, 5, 8) → 10
*/
var maximo = Math.max(10, 5, 8, 2, 1);
document.write("Valor máximo: " + maximo);
document.write("<br>");

/*
  CONSTANTE Math.PI
  Representa el valor de Pi (π ≈ 3.14159...)
  Útil para cálculos de geometría (círculos, ángulos, etc.)
*/
document.write("Valor de PI: " + Math.PI);
document.write("<br>");

/*
  RAÍZ CUADRADA DE UN NÚMERO
  Calculando la raíz cuadrada de un número al cuadrado
  debería devolver el número original (o muy cercano)
*/
var base = 5;
var exponente = 2;
var potencia = Math.pow(base, exponente);
document.write("5 elevado a 2 es: " + potencia);
document.write("<br>");

/*
  REDONDEO DE NÚMEROS ALEATORIOS
  Generando números enteros aleatorios en un rango específico
*/
var numeroAleatorio = Math.random() * 100;
document.write("Número aleatorio entre 0 y 100: " + Math.round(numeroAleatorio));
document.write("<br>");