/*
  ARCHIVO: condicionales.js
  TEMA: Condicionales if-else y operadores de comparación
  
  En este ejemplo se utilizan:
  - prompt() para solicitar datos al usuario
  - parseInt() para convertir texto a número
  - Operadores de comparación: === (igualdad estricta), >= (mayor o igual)
  - Estructuras condicionales: if, else if, else
  - Interpolación de variables en mensajes con template literals
*/

// Se declaran las variables que almacenarán los datos del usuario
let nombre, edad, licencia;

/*
  ENTRADA DE DATOS
  Se solicita información al usuario mediante ventanas emergentes
*/

// Solicita el nombre del usuario
nombre = prompt("¿Cuál es tu nombre?");

// Solicita la edad (se guarda como texto)
edad = prompt("¿Cuál es tu edad?");

// Pregunta si tiene licencia de conducir (respuesta: "si" o "no")
licencia = prompt("¿Tienes licencia de conducir? Responde si o no");

/*
  CONVERSIÓN DE TIPO DE DATO
  parseInt() convierte un string (texto) a número entero.
  Esto es necesario porque prompt() siempre devuelve texto.
  
  Ejemplo: "18" (string) → 18 (number)
*/
edad = parseInt(edad);

// Se muestra la edad del usuario en el documento
document.write(edad);

/*
  ESTRUCTURA CONDICIONAL if-else if-else
  
  Evalúa múltiples condiciones en orden:
  1. Si la primera condición es verdadera, ejecuta su bloque
  2. Si no, evalúa la segunda condición
  3. Si ninguna es verdadera, ejecuta el bloque else
  
  OPERADORES DE COMPARACIÓN:
  - === : igualdad estricta (compara valor Y tipo de dato)
  - >= : mayor o igual que
*/

// PRIMERA CONDICIÓN: Verifica si tiene licencia Y es mayor de edad
if (licencia === "si") {
  // Si tiene licencia, verifica la edad
  if (edad >= 18) {
    /*
      OPERADOR >= (mayor o igual)
      Comprueba si la edad es 18 o más.
      
      Ejemplos:
      - 18 >= 18 → true (puede conducir)
      - 20 >= 18 → true (puede conducir)
      - 16 >= 18 → false (no puede conducir)
    */
    alert(`Felicidades ${nombre}, puedes conducir`);
  }
} else {
  /*
    BLOQUE else
    Se ejecuta cuando la condición del if es falsa.
    En este caso, cuando NO tiene licencia O es menor de edad.
  */
  alert(`Lo siento ${nombre}, no puedes conducir, eres menor de edad`);
}

/*
  OPERADOR === (igualdad estricta)
  Compara tanto el VALOR como el TIPO de dato.
  
  Diferencia con ==:
  - === : "18" === 18 → false (diferentes tipos: string vs number)
  - == : "18" == 18 → true (solo compara valores, ignora tipos)
  
  Se recomienda usar === para evitar errores inesperados.
*/