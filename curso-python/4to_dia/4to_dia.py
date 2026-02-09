# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 4: Lógica y Control de Flujo
# Temas: Operadores, Loops, Comprensión de Listas y más
# ---------------------------------------------------------
import random # Necesario para el tema Random.pdf

# === 1. OPERADORES DE COMPARACIÓN Y LÓGICOS ===
# Comparación: ==, !=, >, <, >=, <=
# Lógicos: and, or, not
print("--- 1. LÓGICA DE COMPARACIÓN ---")
a = 10
b = 5
print(f"¿10 es mayor que 5 y menor que 20?: {a > b and a < 20}")
print(f"¿10 es igual a 5 o es mayor a 0?: {a == b or a > 0}")
print("\n")


# === 2. CONTROL DE FLUJO (if, elif, else) ===
print("--- 2. CONTROL DE FLUJO ---")
hambre = True
dinero = False

if hambre and dinero:
    print("Puedes comprar comida.")
elif hambre and not dinero:
    print("Tienes hambre pero no tienes dinero.")
else:
    print("No tienes hambre.")
print("\n")


# === 3. LOOPS (For y While) ===
print("--- 3. BUCLES (LOOPS) ---")
# Loop For: Para iterar sobre colecciones
nombres = ["Ana", "Beto", "Carla"]
for nombre in nombres:
    print(f"Hola {nombre}")

# Loop While: Mientras una condición sea verdadera
contador = 3
while contador > 0:
    print(f"Cuenta regresiva: {contador}")
    contador -= 1
print("\n")


# === 4. FUNCIONES ÚTILES (Range, Zip, Enumerador) ===
print("--- 4. HERRAMIENTAS DE ITERACIÓN ---")
# Range: Crea una secuencia de números
for i in range(1, 4): # Del 1 al 3
    print(f"Número de range: {i}")

# Enumerador: Te da el índice y el valor al mismo tiempo
for indice, nombre in enumerate(nombres):
    print(f"Índice {indice}: {nombre}")

# Zip: Une dos o más listas en pares
edades = [20, 25, 30]
combinado = list(zip(nombres, edades))
print(f"Lista combinada con Zip: {combinado}")
print("\n")


# === 5. MIN, MAX Y RANDOM ===
print("--- 5. MATEMÁTICA Y AZAR ---")
numeros = [45, 12, 89, 33]
print(f"El número mayor es: {max(numeros)}")
print(f"El número menor es: {min(numeros)}")

# Random: Generar números aleatorios
aleatorio = random.randint(1, 100)
print(f"Número aleatorio entre 1 y 100: {aleatorio}")
print("\n")


# === 6. COMPRENSIÓN DE LISTAS ===
# Una forma elegante de crear listas en una sola línea.
print("--- 6. COMPRENSIÓN DE LISTAS ---")
valores = [1, 2, 3, 4, 5]
cuadrados = [n**2 for n in valores] # Eleva cada n al cuadrado
print(f"Original: {valores} -> Cuadrados: {cuadrados}")


# === 7. MATCH (Estructura de control moderna) ===
# Similar al switch en otros lenguajes (Disponible en Python 3.10+)
print("\n--- 7. ESTRUCTURA MATCH ---")
estado = 404
match estado:
    case 200:
        print("Todo OK")
    case 404:
        print("No encontrado")
    case _:
        print("Error desconocido")

print("\n--- FIN DEL DÍA 4: ¡Ya piensas como programador! ---")