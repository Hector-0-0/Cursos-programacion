//movies.mjs

// Importamos el Modelo que se encarga de la lógica de datos (Base de Datos o JSON)
import { MovieModel } from "../models/database/movie.mjs";
// Importamos las validaciones de esquema (Zod)
import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";

/**
 * MovieController: Capa encargada de gestionar las peticiones HTTP.
 * Su trabajo es: recibir datos, pedirle al modelo que los procese y responder al cliente.
 */
export class MovieController {
  // Recupera todas las películas, opcionalmente filtradas por género
  static async getAll(req, res) {
    const { genre } = req.query;
    // Delegamos la búsqueda al modelo. Pasamos un objeto con el género.
    const peliculas = await MovieModel.getAll({ genre });
    res.json(peliculas);
  }

  // Recupera una película por su ID
  static async getById(req, res) {
    const { id } = req.params;
    // El controlador no sabe DÓNDE está la película, solo se la pide al modelo
    const movie = await MovieModel.getById(id);

    if (movie) return res.json(movie);

    res.status(404).json({ message: "Movie not found" });
  }

  // Crea una nueva película previa validación del body
  static async create(req, res) {
    const validationResult = validateMovie(req.body);

    // Si los datos no pasan el esquema de Zod, respondemos con error 400
    if (!validationResult.success) {
      return res.status(400).json({ errors: validationResult.error.errors });
    }

    // Pasamos los datos ya validados al modelo para que los guarde
    const newMovie = await MovieModel.create(validationResult.data);
    res.status(201).json(newMovie);
  }

  // Actualiza parcialmente una película
  static async update(req, res) {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      return res.status(400).json({ errors: result.error.errors });
    }

    const { id } = req.params;
    try {
      // El modelo intenta actualizar y si no encuentra el ID, lanza un error
      const updatedMovie = await MovieModel.update(id, result.data);
      return res.json(updatedMovie);
    } catch (error) {
      // Capturamos el error del modelo (ej: "Movie not found")
      return res.status(404).json({ message: error.message });
    }
  }

  // Elimina una película
  static async delete(req, res) {
    const { id } = req.params;
    try {
      await MovieModel.delete(id);
      // 204 No Content: Éxito pero no hay nada que devolver
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}
