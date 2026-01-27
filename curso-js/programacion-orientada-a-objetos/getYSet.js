/*
ARCHIVO: getSet.js
TEMA: Métodos Get y Set en JavaScript
En este ejemplo se explica cómo controlar el acceso a las propiedades de un objeto:

1. Get (Getter): Permite obtener y formatear un valor de forma controlada.
2. Set (Setter): Permite asignar y validar un valor antes de guardarlo.

DATO IMPORTANTE: Se suele usar un guion bajo (_) antes del nombre de la propiedad 
(ej. _precio) para indicar que es una variable interna y evitar bucles infinitos 
al llamar al get o set.
*/

// --- 1. DEFINICIÓN DE LA CLASE CON GET Y SET ---
class Producto {
    constructor(precioInicial) {
        // Propiedad interna "protegida" por convención
        this._precio = precioInicial; 
    }

    // GETTER: Se activa al leer 'instancia.precio'
    // Útil para devolver el dato con un formato específico (como moneda).
    get precio() {
        return `$${this._precio.toFixed(2)}`;
    }

    // SETTER: Se activa al asignar 'instancia.precio = valor'
    // Útil para realizar validaciones de seguridad.
    set precio(nuevoValor) {
        if (nuevoValor < 0) {
            console.error("Error: El precio no puede ser negativo.");
        } else {
            this._precio = nuevoValor;
        }
    }
}

// --- 2. CREACIÓN DE LA INSTANCIA (Objeto) ---

// Creamos un producto con un precio inicial de 100
let miProducto = new Producto(100);

// --- 3. PRUEBAS DE ACCESO Y VALIDACIÓN ---

// Uso del GETTER:
// Notar que no se usan paréntesis (), se llama como una propiedad normal.
console.log("Precio actual (con formato):", miProducto.precio); 

// Uso del SETTER (Asignación correcta):
miProducto.precio = 150.75; 
console.log("Nuevo precio tras actualización:", miProducto.precio);

// Uso del SETTER (Asignación incorrecta):
// El setter detectará que es negativo y bloqueará el cambio.
miProducto.precio = -50; 

// Verificación final en consola
// El precio debe seguir siendo $150.75 debido a la validación del setter.
console.log("Precio final después del error:", miProducto.precio);