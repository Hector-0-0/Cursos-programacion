# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 3: Estructuras de Datos y Strings Pro
# Temas: Index, Substrings, Listas, Tuplas, Diccionarios, Sets
# ---------------------------------------------------------

# === 1. MÉTODOS Y PROPIEDADES DE STRINGS (Index y Substrings) ===
# index(): Permite saber la posición de un carácter.
# Substrings [inicio:fin:paso]: Extraer partes de un texto.
print("--- 1. STRINGS AVANZADO ---")
texto = "Aprender Python es genial"
print(f"Carácter en índice 9: {texto[9]}") # index
print(f"Fragmento (Slicing): {texto[0:8]}") # substring
print(f"Texto invertido: {texto[::-1]}")   # propiedad de inversión
print("\n")


# === 2. LISTAS (Listas.pdf) ===
# Son mutables (se pueden cambiar) y ordenadas.
print("--- 2. LISTAS ---")
mi_lista = ["manzana", "banana", "cereza"]
mi_lista.append("naranja") # Agregar item
mi_lista[1] = "pera"       # Modificar item
print(f"Mi lista de compras: {mi_lista}")
print(f"Largo de la lista: {len(mi_lista)}")
print("\n")


# === 3. TUPLAS (Tuples.pdf) ===
# Son INMUTABLES (no se pueden cambiar tras crearse). Usan paréntesis ().
print("--- 3. TUPLAS ---")
mi_tupla = (1, 5, 10, 5)
print(f"Elemento en tupla: {mi_tupla[0]}")
print(f"Veces que aparece el 5: {mi_tupla.count(5)}")
print("\n")


# === 4. DICCIONARIOS (Diccionarios.pdf) ===
# Estructuras de llave:valor. Muy útiles para bases de datos.
print("--- 4. DICCIONARIOS ---")
usuario = {
    "nombre": "Hector",
    "apellido": "0-0",
    "puntos": 100,
    "es_pro": True
}
print(f"Nombre del usuario: {usuario['nombre']}")
print(f"Todas las llaves: {usuario.keys()}")
print("\n")


# === 5. SETS / CONJUNTOS (Sets + Métodos.pdf) ===
# Colecciones de elementos ÚNICOS y sin orden fijo.
print("--- 5. SETS ---")
mi_set = {1, 2, 3, 4, 4, 4} # Los '4' repetidos se eliminan solos
print(f"Set (sin repetidos): {mi_set}")
mi_set.add(5)
print("\n")


# === 6. BOOLEANOS (Booleanos.pdf) ===
# Valores lógicos: True o False.
print("--- 6. BOOLEANOS ---")
prueba = 5 > 3
print(f"¿5 es mayor que 3?: {prueba}")
print(f"Tipo de dato: {type(prueba)}")

print("\n--- FIN DEL DÍA 3: ¡Ya dominas las colecciones! ---")