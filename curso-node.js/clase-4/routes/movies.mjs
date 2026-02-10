import Router from "express";
import peliculas from "../movies.json" with { type: "json" };
import { validateMovie, validatePartialMovie } from "../schemas/movies.mjs";
import crypto from "node:crypto";

export const moviesRouter = Router();

moviesRouter.get("/", (req, res) => {
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = peliculas.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase()),
    );
    return res.json(filteredMovies);
  }
  res.json(peliculas);
});

moviesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const movie = peliculas.find((movie) => movie.id === id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: "Movie not found" });
});

moviesRouter.post("/", (req, res) => {
  const validationResult = validateMovie(req.body);

  if (!validationResult.success) {
    return res.status(400).json({ errors: validationResult.error.errors });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...validationResult.data,
  };

  peliculas.push(newMovie);
  res.status(201).json(newMovie);
});

moviesRouter.patch("/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  const { id } = req.params;
  const movieIndex = peliculas.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const updatedMovie = {
    ...peliculas[movieIndex],
    ...result.data,
  };

  peliculas[movieIndex] = updatedMovie;
  return res.json(updatedMovie);
});

moviesRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = peliculas.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  peliculas.splice(movieIndex, 1);
  return res.status(204).send();
});
