/*
ARCHIVO: objetosClasesMetodos.js
TEMA: Programación Orientada a Objetos y Objetos Literales
En este ejemplo se comparan dos formas de manejar datos:
1. Objeto Literal: Para estructuras únicas y simples.
2. Clases (POO): Plantillas para crear múltiples objetos (instancias) con propiedades y métodos.
*/

// --- 1. OBJETO LITERAL ---
// Se define una estructura fija con pares clave: valor
var Auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    color: "Azul",
    tipo: "Sedán",
    radio: ["FM", "AM", "Bluetooth", "AUX"]
}

document.write("Marca: " + Auto.marca + "<br>");
document.write("Modelo: " + Auto.modelo + "<br>");
// .join() convierte el array de la radio en un texto separado por comas
document.write("Radio: " + Auto.radio.join(", ") + "<br>");

// --- 2. CLASES Y MÉTODOS ---
// Definimos la "plantilla" Persona
class Persona {
    nombre = 'Homero';
    apellido = 'Simpson';
    edad = 39;
    direccion = '742 Evergreen Terrace';
    telefono = '555-1234';
    email = 'homero.simpson@example.com';

    // Métodos: Acciones que puede realizar la persona
    trabajar() {
        return 'trabaja en la planta nuclear';
    }

    estudiar() {
        return 'estudia en la escuela primaria de Springfield';
    }
}

// Creación de instancias (objetos basados en la clase)
const homero = new Persona();
document.write("<br>Nombre: " + homero.nombre + "<br>");
document.write("Ocupación: " + homero.trabajar() + "<br>");

const bart = new Persona();
document.write("<br>Nombre: Bart " + bart.apellido + "<br>");
document.write("Bart estudia: " + bart.estudiar() + "<br>");

const lenin = new Persona();
document.write("<br>Trabajo de lenin: " + lenin.trabajar() + "<br>");