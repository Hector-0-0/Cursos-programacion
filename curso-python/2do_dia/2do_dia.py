# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 2: Variables y Operaciones
# Temas: Variables, Tipos de Datos, Operadores y Formateo
# ---------------------------------------------------------

# === 1. VARIABLES Y NOMBRES ===
# Las variables son espacios en memoria. 
# Los nombres deben ser descriptivos y usar snake_case (letras minúsculas y guiones bajos).
nombre_usuario = "Hector"
edad = 25

# === 2. TIPOS DE DATOS (Integers y Floats) ===
# int: números enteros (1, 5, -10)
# float: números con decimales (3.14, 2.0)
puntos_vida = 100          # Integer
precio_dolar = 3.85        # Float
es_programador = True      # Boolean (Otro tipo de dato esencial)


# === 3. OPERADORES MATEMÁTICOS ===
print("--- OPERADORES MATEMÁTICOS ---")
n1 = 10
n2 = 3

suma = n1 + n2
resta = n1 - n2
multiplicacion = n1 * n2
division = n1 / n2
division_al_piso = n1 // n2 # Devuelve solo el entero de la división
modulo = n1 % n2            # El sobrante/resto de la división
potencia = n1 ** 2          # 10 elevado al cuadrado

print(f"Suma: {suma}, División: {division}, Módulo: {modulo}")


# === 4. REDONDEO (Round) ===
# La función round() ayuda a manejar los decimales.
print("\n--- REDONDEO ---")
valor_largo = 10 / 3
print(f"Valor sin redondear: {valor_largo}")
print(f"Valor redondeado a 2 decimales: {round(valor_largo, 2)}")


# === 5. CONVERSIONES ENTRE TIPOS DE DATOS (Casting) ===
# A veces recibimos un dato como string y lo necesitamos como número.
print("\n--- CONVERSIONES ---")
num_texto = "50"
num_entero = int(num_texto)  # De String a Integer
num_decimal = float(num_entero) # De Integer a Float

print(f"Tipo original: {type(num_texto)}, Nuevo tipo: {type(num_entero)}")


# === 6. FORMATEAR CADENAS (f-strings) ===
# La forma más eficiente y moderna de mezclar texto y variables.
print("\n--- FORMATEO DE CADENAS ---")
print(f"Hola {nombre_usuario}, tu puntaje actual es de {puntos_vida} puntos.")

# Ejemplo de formateo con operaciones directas
print(f"Si duplicas tus puntos, tendrías: {puntos_vida * 2}")

print("\n--- FIN DEL DÍA 2 ---")