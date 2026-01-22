/*
ARCHIVO: claseDate.js
TEMA: Manejo de fechas y tiempo en JavaScript
En este ejemplo se utilizan:
- Constructor 'new Date()'
- Template Literals (comillas invertidas ``) para interpolación de variables
- Métodos de extracción: getDate(), getMonth(), getFullYear()
*/

// Obtiene la fecha y hora exacta del sistema en el momento de ejecución
const fechaActual = new Date();
document.write(`Fecha y hora actual: ${fechaActual}<br>`);

// Creación de una fecha específica (Año, Mes [0-11], Día)
// Nota: Enero es el mes 0
let fecha = new Date(2023, 0, 15);
document.write(`Fecha específica: ${fecha}<br>`);

// Extracción de partes individuales de la fecha
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1; // Se suma 1 porque los meses inician en 0
const anio = fechaActual.getFullYear();

document.write(`Día: ${dia}, Mes: ${mes}, Año: ${anio}<br>`);