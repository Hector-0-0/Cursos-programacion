# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 6: Entrada y Salida de Archivos
# Temas: Lectura/Escritura, Directorios, Pathlib y Consola
# ---------------------------------------------------------
import os
from pathlib import Path

# === 1. ABRIR Y LEER ARCHIVOS ===
# La forma recomendada es usar 'with' para que el archivo se cierre solo.
print("--- 1. LECTURA DE ARCHIVOS ---")
# Nota: Este código asume que existe un archivo 'prueba.txt'
try:
    with open("prueba.txt", "r", encoding="utf-8") as archivo:
        contenido = archivo.read()
        print(f"Contenido del archivo:\n{contenido}")
except FileNotFoundError:
    print("Archivo 'prueba.txt' no encontrado para lectura.")
print("\n")


# === 2. CREAR Y ESCRIBIR ARCHIVOS ===
# Modos: 'w' (sobrescribe), 'a' (agrega al final)
print("--- 2. ESCRITURA DE ARCHIVOS ---")
with open("notas_dia_6.txt", "w") as mi_archivo:
    mi_archivo.write("Hoy aprendí a manejar archivos en Python.\n")
    mi_archivo.write("Esta es la segunda línea del archivo.")
print("Archivo 'notas_dia_6.txt' creado con éxito.")


# === 3. DIRECTORIOS (os) ===
# Manejo de rutas y carpetas del sistema.
print("\n--- 3. GESTIÓN DE DIRECTORIOS ---")
ruta_actual = os.getcwd()
print(f"Ruta de trabajo actual: {ruta_actual}")

# Crear una carpeta nueva (si no existe)
if not os.path.exists("Nueva_Carpeta"):
    os.makedirs("Nueva_Carpeta")
    print("Carpeta 'Nueva_Carpeta' creada.")


# === 4. PATH Y PATHLIB (Gestión moderna de rutas) ===
# Pathlib hace que trabajar con rutas sea mucho más fácil e independiente del OS.
print("\n--- 4. PATHLIB Y RUTAS ---")
guia = Path("Carpeta_Proyecto", "Subcarpeta", "archivo.txt")
print(f"Ruta construida con Pathlib: {guia}")
print(f"Nombre del archivo: {guia.name}")
print(f"Extensión: {guia.suffix}")


# === 5. ARCHIVOS Y FUNCIONES ===
# Ejemplo de cómo procesar archivos dentro de funciones.
def procesar_log(nombre_archivo):
    with open(nombre_archivo, "r") as f:
        lineas = f.readlines()
        return len(lineas)

# Creamos un log rápido para la prueba
with open("log.txt", "w") as f: f.write("Error 1\nError 2\nError 3")
print(f"Cantidad de líneas en log.txt: {procesar_log('log.txt')}")


# === 6. LIMPIAR LA CONSOLA ===
# Útil para crear menús interactivos limpios.
def limpiar_pantalla():
    # 'nt' es para Windows, 'posix' para Linux/Mac
    os.system('cls' if os.name == 'nt' else 'clear')

input("\nPresiona Enter para limpiar la consola...")
limpiar_pantalla()
print("Consola limpia. ¡Fin del Día 6!")
