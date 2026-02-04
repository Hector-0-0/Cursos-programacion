/*
ARCHIVO: calculadora.js
TEMA: Lógica de Calculadora con Control de Flujo Avanzado
En este ejemplo se exploran:
- Limitación de entrada de datos mediante .length.
- Validación específica para evitar la división por cero.
- Gestión de estados (disabled) condicionada al contenido del botón.
- Uso de bloques try...catch para capturar errores de sintaxis en eval().
- Iteración de NodeLists para aplicar estilos y bloqueos masivos.
*/

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
numeros = document.querySelectorAll(".boton-numeros");
operadores = document.querySelectorAll(".boton-operadores");
resultado = document.getElementById("resultado");
borrar = document.getElementById("clear");

// Estado inicial de la pantalla
resultado.value = "0";

/**
 * Función para resetear la calculadora.
 * Restablece el valor a "0" y rehabilita todos los controles.
 */
function borrarPantalla() {
    resultado.value = "0";

    // Habilita nuevamente los operadores
    operadores.forEach(function(boton){
        boton.disabled = false;
    });

    // Habilita nuevamente los números
    numeros.forEach(function(boton){
        boton.disabled = false;
    });
}

// Vinculación del evento click al botón de borrado (C)
borrar.addEventListener("click", borrarPantalla);

// 2. LÓGICA DE ENTRADA DE NÚMEROS
numeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        // Si el valor actual es 0, lo reemplazamos por el primer número presionado
        if (resultado.value == "0") {
            resultado.value = boton.textContent;
        } 
        // Validación de longitud: solo permite ingresar hasta 10 dígitos
        else {
            resultado.value += boton.textContent;
        }
    });
});

// 3. LÓGICA DE OPERADORES Y PROCESAMIENTO
operadores.forEach(function(boton){
    boton.addEventListener("click", function(){
        
        // --- MANEJO DE SUMA ---
        if (boton.textContent == "+") {
            resultado.value += "+";
            // Bloqueamos operadores para evitar entradas dobles como "++"
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // --- MANEJO DE RESTA ---
        } else if (boton.textContent == "-") {
            resultado.value += "-";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // --- MANEJO DE MULTIPLICACIÓN ---
        } else if (boton.textContent == "*") {
            resultado.value += "*";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // --- MANEJO DE DIVISIÓN (Con validación especial) ---
        } else if (boton.textContent == "/") {
            resultado.value += "/";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            // Bloqueamos específicamente el botón "0" para evitar divisiones inválidas
            numeros.forEach(function(boton){
                if(boton.textContent == "0"){
                    boton.disabled = true;
                }
            });
            });

        // --- CÁLCULO FINAL (=) ---
        } else if (boton.textContent == "=") {
            try {
                // eval() procesa el string acumulado como operación matemática
                resultado.value = eval(resultado.value);
            } catch (error) {
                // Si la expresión es inválida, muestra "Error" y bloquea la interfaz
                resultado.value = "Error";
                operadores.forEach(function(boton){
                    if(boton.textContent != "C"){
                        boton.disabled = true;
                    }
                });
                numeros.forEach(function(boton){
                    boton.disabled = true;
                });
            }
        }
    });
});