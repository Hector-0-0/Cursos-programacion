# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 5: Funciones y Programación Modular
# Temas: Funciones, Return, Dinámicas, Interacción, Args y Kwargs
# ---------------------------------------------------------

# === 1. FUNCIONES Y DOCUMENTACIÓN ===
# Las funciones nos permiten reutilizar código. 
# La documentación (Docstrings) explica qué hace la función.
def saludar_usuario(nombre):
    """
    Esta función recibe un nombre y muestra un saludo.
    Documentación.pdf
    """
    print(f"Hola {nombre}, bienvenido al sistema de funciones.")

saludar_usuario("Hector")


# === 2. RETURN (Retorno de valores) ===
# Return permite que la función devuelva un dato para ser usado luego.
def sumar(a, b):
    return a + b

resultado = sumar(10, 5)
print(f"El resultado de la suma es: {resultado}")


# === 3. FUNCIONES DINÁMICAS ===
# Funciones que operan con lógica interna (ej. verificar condiciones).
def chequear_lista_positivos(lista_num):
    for n in lista_num:
        if n < 0:
            return False # Retorno inmediato si encuentra un negativo
    return True

print(f"¿Todos son positivos?: {chequear_lista_positivos([1, 5, -2, 10])}")


# === 4. INTERACCIÓN ENTRE FUNCIONES ===
# Podemos usar el resultado de una función como entrada de otra.
def lanzar_dados():
    import random
    return random.randint(1, 6), random.randint(1, 6)

def evaluar_jugada(dado1, dado2):
    suma = dado1 + dado2
    if suma <= 6:
        return f"Suma {suma}: Mala suerte"
    else:
        return f"Suma {suma}: ¡Buena jugada!"

d1, d2 = lanzar_dados()
print(evaluar_jugada(d1, d2))


# === 5. ARGUMENTOS INDEFINIDOS (*args) ===
# Permite pasar cualquier cantidad de argumentos posicionales (se reciben como tupla).
def suma_total(*args):
    return sum(args)

print(f"Suma de muchos números: {suma_total(10, 20, 30, 40, 5)}")


# === 6. ARGUMENTOS INDEFINIDOS (**kwargs) ===
# Permite pasar argumentos con nombre o llave-valor (se reciben como diccionario).
def describir_usuario(nombre, **kwargs):
    print(f"Usuario: {nombre}")
    for clave, valor in kwargs.items():
        print(f"- {clave}: {valor}")

describir_usuario("Hector", edad=25, puesto="Developer", lenguaje="Python")

print("\n--- FIN DEL DÍA 5: ¡Ya creas tus propias herramientas! ---")