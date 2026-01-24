/*
  ARCHIVO: funcionesStrings.js
  TEMA: Métodos y funciones para manipular cadenas de texto (Strings)
  
  En este ejemplo se utilizan:
  - Métodos de strings: length, slice(), substring(), replace()
  - Métodos de transformación: toUpperCase(), toLowerCase()
  - Método concat() para unir strings
  - Métodos trim(), trimEnd(), trimStart() para eliminar espacios
  - Método split() para dividir cadenas
*/

// Se declara una variable de tipo string
let palabra = "JavaScript";

// Se muestra el contenido de la variable
document.write("La palabra es: " + palabra + "<br>");

/*
  PROPIEDAD .length
  Devuelve la cantidad de caracteres que tiene un string.
  Incluye letras, números, espacios y caracteres especiales.
  
  Ejemplo: "JavaScript" tiene 10 caracteres
*/
document.write("El tamaño de la palabra es: " + palabra.length + "<br>");

/*
  MÉTODO .slice(inicio, fin)
  Extrae una porción del string desde la posición 'inicio' hasta 'fin-1'.
  
  Parámetros:
  - inicio: posición donde comienza la extracción (incluida)
  - fin: posición donde termina (NO incluida)
  
  IMPORTANTE: Las posiciones empiezan en 0
  Ejemplo: "JavaScript".slice(0, 4) → "Java"
  Posiciones: J=0, a=1, v=2, a=3, S=4
*/
document.write("Las primeras 4 letras son: " + palabra.slice(0, 4) + "<br>");

/*
  MÉTODO .substring(inicio, fin)
  Similar a slice(), extrae una parte del string.
  
  Diferencia con slice():
  - substring() no acepta índices negativos
  - slice() sí permite índices negativos (cuenta desde el final)
  
  Ejemplo: "JavaScript".substring(0, 4) → "Java"
*/
document.write(
  "Las letras desde la posición 0 a la 4 son: " +
  palabra.substring(0, 4) +
  "<br>",
);

/*
  MÉTODO .replace(textoViejo, textoNuevo)
  Busca un texto dentro del string y lo reemplaza por otro.
  Solo reemplaza la PRIMERA coincidencia encontrada.
  
  Ejemplo: "JavaScript".replace("Java", "Type") → "TypeScript"
*/
document.write(
  "Reemplazando Java por Type: " + palabra.replace("Java", "Type") + "<br>",
);

/*
  MÉTODO .toUpperCase()
  Convierte todos los caracteres del string a MAYÚSCULAS.
  No modifica el string original, devuelve uno nuevo.
  
  Ejemplo: "JavaScript".toUpperCase() → "JAVASCRIPT"
*/
document.write("En mayúsculas: " + palabra.toUpperCase() + "<br>");

/*
  MÉTODO .toLowerCase()
  Convierte todos los caracteres del string a minúsculas.
  No modifica el string original, devuelve uno nuevo.
  
  Ejemplo: "JavaScript".toLowerCase() → "javascript"
*/
document.write("En minúsculas: " + palabra.toLowerCase() + "<br>");

/*
  MÉTODO .concat(string1, string2, ...)
  Une (concatena) varios strings en uno solo.
  Es similar a usar el operador +
  
  Ejemplo: "Unir".concat(" texto") → "Unir texto"
*/
document.write(
  "Unir con concat: " +
  palabra.concat(" es un lenguaje de programación") +
  "<br>",
);

/*
  MÉTODOS PARA ELIMINAR ESPACIOS EN BLANCO:
  
  - trim(): elimina espacios al inicio Y al final
  - trimEnd(): elimina espacios solo al final
  - trimStart(): elimina espacios solo al inicio
  
  Útiles para limpiar datos ingresados por usuarios
*/

// String con espacios al inicio y al final
let frase = "   Hola Mundo   ";

// trim() elimina espacios de ambos lados
document.write("Frase sin espacios: '" + frase.trim() + "'<br>");

// trimEnd() elimina solo los espacios finales
document.write("Frase sin espacios al final: '" + frase.trimEnd() + "'<br>");

// trimStart() elimina solo los espacios iniciales
document.write("Frase sin espacios al inicio: '" + frase.trimStart() + "'<br>");

/*
  MÉTODO .split(separador)
  Divide un string en un array (lista) de substrings.
  El string se divide cada vez que encuentra el 'separador'.
  
  Parámetros:
  - separador: el carácter o texto que marca dónde dividir
  
  Ejemplo: "Hola-Mundo-JavaScript".split("-")
  Resultado: ["Hola", "Mundo", "JavaScript"]
*/
document.write("Cortar Java: " + palabra.split("Java") + "<br>");