/*
ARCHIVO: expresionesClases.js
TEMA: Declaración vs Expresión de Clases en JavaScript
En este ejemplo se comparan las tres formas de definir clases:

1. Declaración de clase: La forma estándar y más común.
2. Expresión de clase anónima: La clase se guarda en una variable sin nombre propio.
3. Expresión de clase nombrada: Útil para identificar la clase en stack traces (errores).

DATO IMPORTANTE: A diferencia de las funciones, las clases NO tienen 'hoisting',
por lo que deben definirse antes de ser instanciadas con 'new'.
*/

// --- 1. DEFINICIÓN DE UNA CLASE (Declaración estándar) ---
class Papel {
    constructor(altoDado, anchoDado) {
        this.alto = altoDado;
        this.ancho = anchoDado;
    }
}

// --- 2. EXPRESIÓN DE CLASE ANÓNIMA ---
// Se asigna la clase directamente a una variable.
let Papel_A = class {
    constructor(altoDado, anchoDado) {
        this.alto = altoDado;
        this.ancho = anchoDado;
    }
}

// --- 3. EXPRESIÓN DE CLASE NOMBRADA ---
// 'PapelClass' es el nombre interno, pero se usa 'Papel_B' para instanciar.
let Papel_B = class PapelClass {
    constructor(altoDado, anchoDado) {
        this.alto = altoDado;
        this.ancho = anchoDado;
    }
}

// --- CREACIÓN DE INSTANCIAS (Objetos) ---

// Instancia desde la declaración normal
let hoja1 = new Papel(29.7, 21);

// Instancia desde la expresión anónima
let hoja2 = new Papel_A(29.7, 21); 

// Instancia desde la expresión nombrada
// Recordar: En expresiones de clase, la instancia debe ir después de la definición.
let hoja3 = new Papel_B(29.7, 21);

// Verificación de los objetos creados en la consola
console.log("Instancia de Declaración:", hoja1);
console.log("Instancia de Expresión Anónima:", hoja2);
console.log("Instancia de Expresión Nombrada:", hoja3);