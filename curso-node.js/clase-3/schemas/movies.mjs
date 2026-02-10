//movies.mjs

// Importamos la librería zod para la validación de esquemas
import z from "zod";

/**
 * Definición del esquema de validación para una película (Movie).
 * Cada propiedad define el tipo de dato y las reglas que debe cumplir.
 */
const movieSchema = z.object({
  // El título debe ser un string; personalizamos el mensaje si el tipo es inválido
  title: z.string({
    invalid_type_error: "Title must be a string",
  }),
  // El puntaje es opcional, debe ser un número entre 0 y 10
  rate: z.number().max(10).min(0).optional(),
  // El año debe ser un entero entre 1900 y 2024
  year: z.number().int().min(1900).max(2024),
  // El director debe ser un string simple
  director: z.string(),
  // La duración debe ser un número entero y positivo
  duration: z.number().int().positive(),
  // El poster debe ser un string con formato de URL válida
  poster: z.string().url({
    message: "Poster must be a valid URL",
  }),
  // El género debe ser un array de strings que solo acepte los valores del enum
  // Además, se valida que el array no esté vacío (.nonempty)
  genre: z
    .array(z.enum(["Action", "Comedy", "Drama", "Horror", "Sci-Fi"]))
    .nonempty({ message: "Genre must be a non-empty array of valid genres" }),
});

/**
 * Función para validar una película completa (usada en POST).
 * safeParse devuelve un objeto con 'success' (boolean) y 'data' o 'error'.
 */
function validateMovie(input) {
  return movieSchema.safeParse(input);
}

/**
 * Función para validar una película de forma parcial (usada en PATCH).
 * .partial() hace que todas las propiedades del esquema sean opcionales,
 * permitiendo validar solo los campos que el usuario desea actualizar.
 */
function validatePartialMovie(input) {
  return movieSchema.partial().safeParse(input);
}

// Exportamos las funciones para ser utilizadas en el controlador de rutas
export { validateMovie, validatePartialMovie };
