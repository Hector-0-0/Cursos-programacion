# ---------------------------------------------------------
# CURSO DE PYTHON - DÍA 7: Programación Orientada a Objetos (POO)
# Temas: Clases, Herencia, Polimorfismo y Métodos Pro
# ---------------------------------------------------------

# === 1. CLASES Y ATRIBUTOS ===
# Una Clase es un molde. Los atributos son las características.
class Personaje:
    # Atributo de Clase (común para todos los objetos)
    reino = "Pythonia"

    # Constructor (__init__): Define atributos de instancia (únicos de cada objeto)
    def __init__(self, nombre, nivel):
        self.nombre = nombre
        self.nivel = nivel

# === 2. MÉTODOS ===
# Acciones que el objeto puede realizar.
    def presentarse(self):
        print(f"Soy {self.nombre} y mi nivel es {self.nivel}.")

# === 3. TIPOS DE MÉTODOS ===
# Métodos de instancia, de clase y estáticos.
    @classmethod
    def cambiar_reino(cls, nuevo_reino):
        cls.reino = nuevo_reino

    @staticmethod
    def mensaje_ayuda():
        print("Usa las habilidades con sabiduría.")


# === 4. HERENCIA Y HERENCIA EXTENDIDA ===
# Una clase hija hereda todo de la clase padre.
class Guerrero(Personaje):
    def __init__(self, nombre, nivel, arma):
        super().__init__(nombre, nivel) # Hereda el constructor del padre
        self.arma = arma

    # Sobrescribir un método
    def presentarse(self):
        print(f"¡Soy el guerrero {self.nombre}! Lucho con mi {self.arma}.")


# === 5. POLIMORFISMO ===
# Diferentes clases pueden tener métodos con el mismo nombre y ejecutarse distinto.
class Mago(Personaje):
    def presentarse(self):
        print(f"Soy el mago {self.nombre}, domino las artes místicas.")

# Función que demuestra polimorfismo
def saludar_heroe(personaje):
    personaje.presentarse()


# === 6. MÉTODOS ESPECIALES (Dunder Methods) ===
# Permiten definir cómo se comporta el objeto con funciones integradas como print() o len().
class Libro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def __str__(self): # Define qué muestra el print(objeto)
        return f"'{self.titulo}' de {self.autor}"

    def __len__(self): # Define qué devuelve len(objeto)
        return 500 # Ejemplo: páginas fijas


# --- EJECUCIÓN DE EJEMPLOS ---
print("--- POO EN ACCIÓN ---")
mi_guerrero = Guerrero("Hector", 99, "Espada de Código")
mi_mago = Mago("Merlín", 50)

# Polimorfismo en uso
for p in [mi_guerrero, mi_mago]:
    saludar_heroe(p)

# Uso de Métodos Especiales
mi_libro = Libro("Clean Code", "Robert C. Martin")
print(f"Información del libro: {mi_libro}")
print(f"Longitud simulada: {len(mi_libro)}")

print("\n--- FIN DEL DÍA 7: ¡Ya eres un Arquitecto de Software! ---")
