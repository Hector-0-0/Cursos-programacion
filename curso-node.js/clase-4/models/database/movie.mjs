//movies.mjs

// Importamos los datos iniciales y el generador de IDs únicos
import { peliculas } from "../../movies.json" with { type: "json" };
import crypto from "node:crypto";

/**
 * MovieModel: Capa de Acceso a Datos.
 * Se encarga exclusivamente de interactuar con la "base de datos" (en este caso, un JSON en memoria).
 */
export class MovieModel {
  /**
   * Recupera todas las películas.
   * @param {Object} filter - Objeto que puede contener el género para filtrar.
   */
  static async getAll({ genre }) {
    if (genre) {
      // Lógica de filtrado: comparamos géneros ignorando mayúsculas/minúsculas
      return peliculas.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
      );
    }
    return peliculas; // Si no hay género, devolvemos todo el array
  }

  /**
   * Busca una película por su UUID.
   * Lanza un error si no la encuentra para que el controlador lo capture.
   */
  static async getById(id) {
    const movie = peliculas.find((movie) => movie.id === id);
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  }

  /**
   * Crea un nuevo registro de película.
   * @param {Object} movieData - Datos ya validados provenientes del controlador.
   */
  static async create(movieData) {
    const newMovie = {
      id: crypto.randomUUID(), // Generamos un ID único universal
      ...movieData, // Esparcimos el resto de los campos
    };
    // Mutamos el array en memoria
    peliculas.push(newMovie);
    return newMovie;
  }

  /**
   * Actualiza los datos de una película existente.
   */
  static async update(id, updateData) {
    const movieIndex = peliculas.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) {
      throw new Error("Movie not found");
    }

    // Creamos el objeto actualizado combinando los datos viejos con los nuevos
    const updatedMovie = {
      ...peliculas[movieIndex],
      ...updateData,
    };

    peliculas[movieIndex] = updatedMovie;
    return updatedMovie;
  }

  /**
   * Elimina una película del array.
   */
  static async delete(id) {
    const movieIndex = peliculas.findIndex((movie) => movie.id === id);
    if (movieIndex === -1) {
      throw new Error("Movie not found");
    }
    // Eliminamos exactamente 1 elemento en la posición encontrada
    peliculas.splice(movieIndex, 1);
  }
}
