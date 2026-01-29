/*
ARCHIVO: calculadora.js
TEMA: Lógica de Calculadora con Manejo de Estados y Eventos
En este ejemplo se exploran:
- Selección de múltiples elementos mediante selectores de clase.
- Uso de forEach para asignar listeners de forma masiva.
- Lógica de concatenación de caracteres en el DOM.
- Manejo de estados (habilitar/deshabilitar botones) para controlar el flujo de la operación.
- Procesamiento de expresiones matemáticas mediante eval() y control de errores con try-catch.
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
 * Limpia la pantalla y habilita todos los botones.
 */
function borrarPantalla() {
    resultado.value = "0";

    // Habilita los operadores
    operadores.forEach(function(boton){
        boton.disabled = false;
    });

    // Habilita los números
    numeros.forEach(function(boton){
        boton.disabled = false;
    });
}

// Vinculación del evento click al botón de borrado
borrar.addEventListener("click", borrarPantalla);

// 2. LÓGICA DE ENTRADA DE NÚMEROS
numeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        // Si el valor actual es 0, lo reemplazamos por el primer número
        if (resultado.value == "0") {
            resultado.value = boton.textContent;
        } else {
            // Si ya hay valores, concatenamos el nuevo número
            resultado.value += boton.textContent;
        }
    });
});

// 3. LÓGICA DE OPERADORES Y PROCESAMIENTO
operadores.forEach(function(boton){
    boton.addEventListener("click", function(){
        
        // Manejo de sumas y bloqueo de otros operadores para evitar errores de sintaxis
        if (boton.textContent == "+") {
            resultado.value += "+";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // Manejo de restas y bloqueo de operadores
        } else if (boton.textContent == "-") {
            resultado.value += "-";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // Manejo de multiplicaciones y bloqueo de operadores
        } else if (boton.textContent == "*") {
            resultado.value += "*";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // Manejo de divisiones y bloqueo de operadores
        } else if (boton.textContent == "/") {
            resultado.value += "/";
            operadores.forEach(function(boton){
                if(boton.textContent != "C" && boton.textContent != "="){
                    boton.disabled = true;
                }
            });

        // Ejecución del cálculo final mediante el botón igual (=)
        } else if (boton.textContent == "=") {
            try {
                // eval() evalúa la cadena de texto como una operación matemática
                resultado.value = eval(resultado.value);
            } catch (error) {
                // En caso de error (sintaxis inválida), bloqueamos la calculadora
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