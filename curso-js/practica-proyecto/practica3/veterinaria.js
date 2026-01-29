/*
ARCHIVO: veterinaria.js
TEMA: Herencia de Clases y Manipulación del DOM en JavaScript
En este ejemplo se muestra cómo gestionar una veterinaria:

1. Clase Padre (Animal): Define las propiedades base (nombre, peso, edad).
2. Clases Hijas (Perro, Gato, Conejo): Heredan de Animal y añaden atributos únicos.
3. Manipulación del DOM: Función para renderizar la lista de objetos en el HTML.

DATO IMPORTANTE: El uso de 'super()' es obligatorio en los constructores de las 
clases hijas para llamar al constructor de la clase padre antes de usar 'this'.
*/

// --- 1. CLASE PADRE (SUPERCLASE) ---
class Animal {
    constructor(nombre, peso, edad) {
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }

    informacion() {
        return `${this.nombre} - ${this.peso}kg - ${this.edad} años`;
    }
}

// --- 2. CLASES HIJAS (SUBCLASES CON HERENCIA) ---

class Perro extends Animal {
    constructor(nombre, peso, edad, raza) {
        super(nombre, peso, edad); // Llama al constructor de Animal
        this.raza = raza;
    }

    informacion() {
        // Extiende el método del padre añadiendo la raza
        return `${super.informacion()} - Raza: ${this.raza}`;
    }
}

class Gato extends Animal {
    constructor(nombre, peso, edad, sexo) {
        super(nombre, peso, edad);
        this.sexo = sexo;
    }

    informacion() {
        return `${super.informacion()} - Sexo: ${this.sexo}`;
    }
}

class Conejo extends Animal {
    constructor(nombre, peso, edad, color) {
        super(nombre, peso, edad);
        this.color = color;
    }

    informacion() {
        return `${super.informacion()} - Color: ${this.color}`;
    }
}

// --- 3. CREACIÓN DE INSTANCIAS Y ALMACENAMIENTO ---

let perro1 = new Perro("Rex", 20, 5, "Labrador");
let gato1 = new Gato("Misu", 5, 3, "Macho");
let conejo1 = new Conejo("Bunny", 2, 1, "Blanco");

// Agrupamos los objetos en un arreglo para recorrerlos fácilmente
let animales = [perro1, gato1, conejo1];

// --- 4. FUNCIÓN PARA MOSTRAR EN EL HTML ---

function mostrarAnimales() {
    // Obtenemos el elemento contenedor del HTML
    let lista = document.getElementById("listaAnimales");

    // Recorremos el arreglo de animales
    for (let animal of animales) {
        // Creamos un nuevo elemento de lista <li>
        let item = document.createElement("li");
        
        // Asignamos el texto usando el método polimórfico informacion()
        item.innerText = animal.informacion();
        
        // Agregamos el item a la lista visual
        lista.appendChild(item);
    }
}