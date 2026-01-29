/*
ARCHIVO: buscaPeliculas.js
TEMA: Proyecto Integrador - Fetch, Eventos Personalizados y Filtros
Este archivo combina múltiples técnicas aprendidas:

1. Custom Events: Creación y disparo de eventos propios para notificar cambios.
2. Validación de Teclado: Uso de códigos de teclas para restringir la entrada.
3. Fetch Dinámico: Carga de diferentes archivos JSON según la elección del usuario.
4. Renderizado con DOM: Creación de listas interactivas con efectos Hover.

REGLA DE ORO DE LOS BUCLES:
- Usamos 'for...of' porque 'salida.data' es un Array. Esto nos da el OBJETO directo.
- NO usamos 'for...in' aquí porque nos daría solo el ÍNDICE (0, 1, 2...),
  lo que rompería la lógica al intentar acceder a 'item.nombre'.
*/

// --- 1. SELECCIÓN DE ELEMENTOS ---
let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = "peliculas.json"; // Fuente de datos por defecto

// --- 2. ASIGNACIÓN DE LISTENERS ---
selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("cambioModo", mensajeModo); // Escucha nuestro evento propio
input.addEventListener("keydown", verificaInput);
boton.addEventListener("click", buscar);

// --- 3. FUNCIONES DE LÓGICA ---

/**
 * Actualiza la fuente de datos y dispara un evento personalizado.
 */
function cambiarArchivo() {
    archivo = selector.value;
    // Creamos y lanzamos el evento para avisar a otras funciones
    let evento = new CustomEvent("cambioModo");
    selector.dispatchEvent(evento);
}

/**
 * Reacciona al evento personalizado usando la librería SweetAlert.
 */
function mensajeModo() {
    swal.fire("El archivo de busqueda ahora es: " + selector.value);
}

/**
 * Filtra la entrada del teclado para permitir solo letras (A-Z) y espacios.
 */
function verificaInput(event) {
    // 65-90: Letras A-Z | 8: Backspace | 32: Espacio
    if ((event.keyCode < 65 || event.keyCode > 90) && event.keyCode != 8 && event.keyCode != 32) {
        event.preventDefault(); // Bloquea números y caracteres especiales
    }
}

/**
 * Realiza la búsqueda en el JSON y construye la lista interactiva.
 */
function buscar() {
    lista.innerHTML = ""; // Limpiamos resultados anteriores
    
    fetch(archivo)
        .then(response => response.json())
        .then(function(salida) {
            
            // APLICACIÓN DE LA REGLA DE ORO:
            // Usamos 'of' para iterar sobre los objetos de película directamente
            for (let item of salida.data) {
                
                // Filtramos por el nombre que empieza con el texto del input
                if (item.nombre.startsWith(input.value.toUpperCase())) {
                    
                    // a. Creamos la sinopsis (oculta inicialmente)
                    let p = document.createElement("p");
                    p.id = item.nombre;
                    p.innerHTML = item.sinopsis;
                    p.style.display = "none";
                     
                    // b. Creamos el elemento de la lista
                    let li = document.createElement("li");
                    li.innerHTML = item.nombre;

                    // c. Eventos de visibilidad (Hover)
                    li.addEventListener("mouseover", function() {
                        let pVisible = document.getElementById(item.nombre);
                        pVisible.style.display = "block";
                    });

                    li.addEventListener("mouseout", function() {
                        let pOculto = document.getElementById(item.nombre);
                        pOculto.style.display = "none";
                    });

                    // d. Ensamblamos la estructura
                    li.appendChild(p);
                    lista.appendChild(li);
                }
            }
        });
}