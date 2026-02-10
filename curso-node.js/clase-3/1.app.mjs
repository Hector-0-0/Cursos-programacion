//1.app.mjs

import express from "express";
// Importación del JSON de películas. Nota: "with { type: 'json' }" es la sintaxis moderna de ES Modules
import peliculas from "./movies.json" with { type: "json" };
// Módulo nativo de Node para generar UUIDs únicos (v4)
import crypto from "node:crypto";
// Importación de las funciones de validación basadas en el esquema de Zod
import { validateMovie, validatePartialMovie } from "./schemas/movies.mjs";

const app = express();

// Middleware para transformar el cuerpo de las peticiones (body) en un objeto JSON
app.use(express.json());

// Seguridad: eliminamos la cabecera que indica que usamos Express para no dar pistas a atacantes
app.disable("x-Powered-by");

/**
 * LISTA BLANCA DE ORÍGENES (CORS):
 * Solo los dominios en este array podrán realizar peticiones a nuestra API.
 */
const ACEPTED_ORIGINS = ["http://localhost:60458", "http://localhost:3000"];

/**
 * MIDDLEWARE DE CORS:
 * Controla quién puede acceder y qué métodos puede usar.
 */
app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Si el origen del cliente está en nuestra lista blanca, permitimos el acceso
  if (ACEPTED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    // Definimos qué métodos HTTP están permitidos
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, OPTIONS, DELETE",
    );
    // Permitimos que el cliente envíe el header Content-Type
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  next(); // Pasamos al siguiente middleware o ruta
});

/**
 * GET /movies: Recuperar todas las películas.
 * Soporta filtrado por género mediante Query String (?genre=...)
 */
app.get("/movies", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    // Filtramos buscando si el género solicitado existe dentro del array de géneros de la película
    const filteredMovies = peliculas.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
    );
    return res.json(filteredMovies);
  }
  res.json(peliculas);
});

/**
 * GET /movies/:id: Recuperar una película específica por su identificador único.
 */
app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = peliculas.find((movie) => movie.id === id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: "Movie not found" });
});

/**
 * POST /movies: Crear una nueva película.
 * Valida los datos con Zod antes de insertarlos.
 */
app.post("/movies", (req, res) => {
  const validationResult = validateMovie(req.body);

  // Si la validación falla (success: false), devolvemos un error 400
  if (!validationResult.success) {
    return res.status(400).json({ errors: validationResult.error.errors });
  }

  // Creamos el nuevo objeto combinando un ID único con los datos validados
  const newMovie = {
    id: crypto.randomUUID(),
    ...validationResult.data,
  };

  // Mutamos el array en memoria (en una app real se usaría una DB)
  peliculas.push(newMovie);
  res.status(201).json(newMovie);
});

/**
 * PATCH /movies/:id: Actualizar parcialmente una película.
 * Solo se modifican los campos enviados en el body.
 */
app.patch("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  const { id } = req.params;
  const movieIndex = peliculas.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  // Fusionamos los datos actuales con los nuevos datos validados
  const updatedMovie = {
    ...peliculas[movieIndex],
    ...result.data,
  };

  peliculas[movieIndex] = updatedMovie;
  return res.json(updatedMovie);
});

/**
 * DELETE /movies/:id: Eliminar una película por su ID.
 */
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = peliculas.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  // Eliminamos el elemento del array
  peliculas.splice(movieIndex, 1);
  // Status 204: Petición exitosa, pero no hay contenido que devolver
  return res.status(204).send();
});

// Definición del puerto y arranque del servidor
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
