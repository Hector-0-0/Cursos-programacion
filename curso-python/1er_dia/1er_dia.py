# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 1: Fundamentos Básicos
# Temas: Strings, Print e Input
# ---------------------------------------------------------

# === 1. TEMA: PRINT (Salida de datos) ===
# La función print() se usa para mostrar información en la consola.
print("--- TEMA: PRINT ---")
print("Hola Mundo! Este es mi primer día aprendiendo Python.")
print("Podemos imprimir números directamente:", 2026)
print("O varias cosas a la vez:", "Día", 1, "completado.")
print("\n") # Salto de línea para organizar la consola


# === 2. TEMA: STRINGS (Cadenas de texto) ===
# Los strings son secuencias de caracteres encerradas en comillas simples ('') o dobles ("").
print("--- TEMA: STRINGS ---")

nombre_curso = "Curso de Python"
herramienta = 'GitHub'

# Concatenación: Unir strings usando el símbolo +
print("Estoy tomando un " + nombre_curso + " y subiré mis notas a " + herramienta)

# Métodos comunes de Strings:
texto_ejemplo = "aprender es divertido"
print("Mayúsculas:", texto_ejemplo.upper())
print("Título:", texto_ejemplo.title())
print("\n")


# === 3. TEMA: INPUT (Entrada de datos) ===
# La función input() permite que el usuario escriba algo desde el teclado.
# ¡Ojo! Todo lo que entra por input() Python lo recibe como un String.
print("--- TEMA: INPUT ---")

# Pedimos información al usuario
nombre_usuario = input("¿Cómo te llamas? ")
edad_usuario = input("¿Qué edad tienes? ")

# Mostramos el resultado interactivo
print("¡Gusto en conocerte, " + nombre_usuario + "!")
print("Veo que tienes " + edad_usuario + " años. ¡Nunca es tarde para programar!")

print("\n--- FIN DEL DÍA 1 ---")