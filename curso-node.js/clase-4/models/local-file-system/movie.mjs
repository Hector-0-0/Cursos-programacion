//movies.mjs

// IMPORTANTE: Los JSON se importan como default, no llevan llaves { }
import peliculas from "../../movies.json" with { type: "json" };
import crypto from "node:crypto"; // Módulo nativo para generar IDs únicos

/**
 * MovieModel: Clase encargada de la persistencia y lógica de datos.
 * Se utilizan métodos estáticos para no tener que instanciar la clase.
 */
export class MovieModel {
  /**
   * Recupera todas las películas o filtra por género.
   * Es 'async' para simular una consulta a base de datos real.
   */
  static async getAll({ genre }) {
    if (genre) {
      // Filtramos el array buscando coincidencias parciales en los géneros
      return peliculas.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
      );
    }
    return peliculas; // Retorna la lista completa si no hay filtro
  }

  /**
   * Busca una película específica por su ID.
   */
  static async getById(id) {
    const movie = peliculas.find((movie) => movie.id === id);
    // Si no existe, lanzamos un error que el controlador atrapará
    if (!movie) {
      throw new Error("Movie not found");
    }
    return movie;
  }

  /**
   * Crea una nueva película y la añade al "almacén".
   */
  static async create(movieData) {
    const newMovie = {
      id: crypto.randomUUID(), // Crea un ID tipo '123e4567-e89b-12d3...'
      ...movieData, // Copia las propiedades validadas
    };

    // Operación en memoria (se pierde al reiniciar el servidor)
    peliculas.push(newMovie);
    return newMovie;
  }

  /**
   * Actualiza una película existente buscando por su índice.
   */
  static async update(id, updateData) {
    const movieIndex = peliculas.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      throw new Error("Movie not found");
    }

    // Fusionamos los datos antiguos con los nuevos (Partial Update)
    const updatedMovie = {
      ...peliculas[movieIndex],
      ...updateData,
    };

    peliculas[movieIndex] = updatedMovie;
    return updatedMovie;
  }

  /**
   * Elimina una película definitivamente del array.
   */
  static async delete(id) {
    const movieIndex = peliculas.findIndex((movie) => movie.id === id);

    if (movieIndex === -1) {
      throw new Error("Movie not found");
    }

    // splice modifica el array original eliminando el elemento
    peliculas.splice(movieIndex, 1);
    return true;
  }
}
