import express from 'express';
import peliculas from './movies.json' with { type: 'json' };
import crypto from 'node:crypto';
import { validateMovie, validatePartialMovie } from './schemas/movies.mjs';
const app = express();
app.use(express.json());
app.disable('x-Powered-by'); // deshabilita el header x-powered-by para mejorar la seguridad

const ACEPTED_ORIGINS = ['http://localhost:8080', 'http://localhost:3000'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if(ACEPTED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});














// todos lo recursos que sean movies se identifican con /movies, por ejemplo /movies/1, /movies/2, etc.
app.get('/movies', (req, res) => {

  const { genre } = req.query; // query string
  if(genre) {
    const filteredMovies = peliculas.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()) );
    return res.json(filteredMovies);
  }
  res.json(peliculas)
});

app.get('/movies/:id', (req, res) => { //path to regexp
  const id = req.params.id;
  const movie = peliculas.find(movie => movie.id === id);
  if(movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }

});

app.post('/movies', (req, res) => {
  const validationResult = validateMovie(req.body);
  if(!validationResult.success) {
    return res.status(400).json({ errors: validationResult.error.errors });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...validationResult.data
  };
  //esto no seria rest porque estamos mutando el estado de la aplicación, pero es solo un ejemplo para mostrar como se haría en memoria, lo ideal sería guardar esto en una base de datos
  peliculas.push(newMovie);
  res.status(201).json(newMovie);
});

app.patch('/movies/:id', (req, res) => {
  const result  = validatePartialMovie(req.body);
  
  if(!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }
  
  const id = req.params.id;
  const movieIndex = peliculas.findIndex(movie => movie.id === id);
  
  if(movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  const updatedMovie = {
    ...peliculas[movieIndex],
    ...result.data
  };
  peliculas[movieIndex] = updatedMovie;
  return res.json(updatedMovie);
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});      