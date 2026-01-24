/*
  ARCHIVO: constantes.js
  TEMA: Diferencia entre variables (let) y constantes (const)
  
  En este ejemplo se demuestra:
  - Declaración de variables con let (pueden cambiar)
  - Declaración de constantes con const (NO pueden cambiar)
  - Qué sucede al intentar reasignar una constante
*/

/*
  VARIABLES CON let
  Las variables declaradas con 'let' pueden ser REASIGNADAS.
  Es decir, podemos cambiar su valor durante la ejecución del programa.
*/

// Se declara una variable 'precio' con valor inicial 100
let precio = 100;
document.write("El precio del producto es: " + precio + " USD");

// REASIGNACIÓN: Se cambia el valor de la variable
precio = 120;
document.write("<br>El nuevo precio del producto es: " + precio + " USD");

/*
  CONSTANTES CON const
  Las constantes declaradas con 'const' NO pueden ser reasignadas.
  Su valor permanece fijo durante toda la ejecución del programa.
  
  Ventajas de usar const:
  - Evita cambios accidentales en valores importantes
  - Hace el código más predecible y fácil de entender
  - Mejora la seguridad del programa
  
  Cuándo usar const:
  - Valores que no deben cambiar (tasas, IDs, configuraciones)
  - Referencias a objetos o arrays que no se reasignarán
*/

// Se declara una constante 'precioFijo' con valor 150
const precioFijo = 150;
document.write("<br>El precio fijo del producto es: " + precioFijo + " USD");

/*
  ERROR: INTENTAR REASIGNAR UNA CONSTANTE
  La siguiente línea generaría un error si se ejecuta:
  
  precioFijo = 200; 
  
  Error: "Assignment to constant variable"
  
  Las constantes están protegidas contra reasignación.
  Esto ayuda a prevenir bugs y comportamientos inesperados.
*/

// precioFijo = 200; // Esto generaría un error porque no se puede reasignar una constante