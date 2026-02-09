// 3.express.mjs

import express from "express";
// Importación de un archivo JSON local usando la sintaxis de ES Modules
import json from "./ditto.json" with { type: "json" };

const app = express();
// Definición del puerto: usa una variable de entorno o el puerto 3000 por defecto
const PORT = process.env.PORT ?? 3000;

/**
 * SEGURIDAD: Deshabilitamos la cabecera "X-Powered-By: Express".
 * Esto evita que los atacantes sepan qué tecnología usamos por debajo.
 */
app.disable("x-powered-by");

/**
 * MIDDLEWARE PERSONALIZADO PARA PARSEAR JSON:
 * Este bloque hace exactamente lo mismo que 'app.use(express.json())'.
 */
app.use((req, res, next) => {
  console.log("Mi primer middleware");

  // Si no es un POST o no trae JSON, no nos interesa procesar el cuerpo aquí
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  let body = "";

  // Escuchamos el evento 'data' para ir uniendo los trozos (chunks) del cuerpo
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  // Cuando termina de llegar la información...
  req.on("end", () => {
    try {
      const data = JSON.parse(body);
      data.timestamp = Date.now();

      console.log("Cuerpo recibido:", data);

      /**
       * MUTACIÓN DE LA REQUEST:
       * Guardamos el objeto ya procesado en 'req.body'.
       * De esta forma, cualquier ruta posterior podrá usar 'req.body'
       * sin tener que volver a procesar el stream.
       */
      req.body = data;

      // IMPORTANTE: Llamamos a next() DENTRO del evento 'end' para asegurar
      // que los datos estén listos antes de pasar a la ruta.
      next();
    } catch (error) {
      // Si el JSON está mal, cortamos la ejecución y enviamos error 400
      res.status(400).send("JSON inválido");
    }
  });
});

/**
 * RUTA GET:
 * Devuelve la información del pokemon importado.
 */
app.get("/pokemon/ditto", (req, res) => {
  res.send(json);
});

/**
 * RUTA POST:
 * Como el middleware ya hizo el trabajo sucio, aquí solo leemos 'req.body'.
 */
app.post("/pokemon", (req, res) => {
  // Respondemos con status 201 (Created) y el cuerpo que el middleware preparó
  res.status(201).json(req.body);
});

/**
 * MANEJO DE 404:
 * Se ejecuta solo si ninguna ruta anterior (GET o POST) capturó la petición.
 */
app.use((req, res) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

// Arrancamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
