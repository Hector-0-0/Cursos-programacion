/*
  ARCHIVO: operadoresAsignacion.js
  TEMA: Operadores de asignación (incremento y decremento)
  
  En este ejemplo se utilizan:
  - Operadores de asignación compuesta (+=, -=, *=, /=, %=, **=)
  - document.write() para mostrar resultados en el navegador
  - Variables y reasignación de valores
*/

// Se declara e inicializa la variable 'a' con el valor 1
let a = 1;

// Se muestra el valor inicial de 'a'
document.write("Valor de a: ", a);
document.write("<br>");

/*
  OPERADOR += (suma y asignación)
  Suma un valor a la variable y guarda el resultado en la misma variable.
  Es equivalente a: a = a + n
  
  En este caso: a += 5 significa a = a + 5
  Entonces: a = 1 + 5 = 6
*/
a++;  // Primero se incrementa a en 1, ahora a = 2
document.write("Valor de a aumentado en 1: ", a);
document.write("<br>");

/*
  OPERADOR -= (resta y asignación)
  Resta un valor a la variable y guarda el resultado.
  Es equivalente a: a = a - n
*/
a--;  // Se decrementa a en 1
document.write("Valor de a disminuido en 1: ", a);
document.write("<br>");

/*
  A continuación se demuestran más operadores de asignación compuesta:
*/

// a += n: Al valor de 'a' se le suma n
a += 5;
document.write("Valor de a aumentado en 5: ", a);
document.write("<br>");

// a -= n: Al valor de 'a' se le resta n
a -= 3;
document.write("Valor de a disminuido en 3: ", a);
document.write("<br>");

/*
  OPERADOR *= (multiplicación y asignación)
  Multiplica la variable por un valor y guarda el resultado.
  Es equivalente a: a = a * n
*/
a *= 2;
document.write("Valor de a multiplicado por 2: ", a);
document.write("<br>");

/*
  OPERADOR /= (división y asignación)
  Divide la variable por un valor y guarda el resultado.
  Es equivalente a: a = a / n
*/
a /= 4;
document.write("Valor de a dividido por 4: ", a);
document.write("<br>");

/*
  OPERADOR %= (módulo y asignación)
  Calcula el resto de la división y lo asigna a la variable.
  Es equivalente a: a = a % n
  
  El módulo devuelve el RESTO de una división.
  Ejemplo: 7 % 3 = 1 (porque 7 ÷ 3 = 2 con resto 1)
*/
a %= 3;
document.write("Valor de a módulo 3: ", a);
document.write("<br>");

/*
  OPERADOR **= (exponenciación y asignación)
  Eleva la variable a una potencia y guarda el resultado.
  Es equivalente a: a = a ** n
  
  El operador ** calcula potencias.
  Ejemplo: 2 ** 3 = 8 (dos elevado al cubo)
*/
a **= 3;
document.write("Valor de a elevado a la 3: ", a);
document.write("<br>");