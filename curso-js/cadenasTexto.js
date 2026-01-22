/*
ARCHIVO: cadenasTexto.js
TEMA: Tipos de comillas y manejo de Strings
JavaScript permite definir cadenas de texto de varias formas.

En este ejemplo se utilizan:
- Comillas dobles ("") y simples ('')
- Template Literals (``) para textos multilínea
- Carácter de escape (\) para continuar strings en código
- Salida de datos con etiquetas HTML <br>
*/

let texto1 = "JavaScript";
let texto2 = 'JavaScript';

// Las comillas invertidas (backticks) permiten crear strings que 
// respetan los saltos de línea sin necesidad de caracteres especiales.
let texto3 = `JavaScript es un
lenguaje de programación que me gusta mucho`;

// La barra invertida (\) permite romper una línea de código 
// sin romper la cadena de texto visualmente.
let texto4 = 
    "El lenguaje \
que me gusta es JavaScript";

document.write(texto1 + "<br>");
document.write(texto2 + "<br>");
document.write(texto3 + "<br>");
document.write(texto4 + "<br>");