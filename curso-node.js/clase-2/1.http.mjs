// 1.http.mjs

import http from "node:http"; // Módulo nativo para crear el servidor web
import fs from "node:fs"; // Módulo nativo para interactuar con el sistema de archivos (versión callbacks)

// Definimos el puerto: usamos la variable de entorno o el 3000 por defecto
const desiredPort = process.env.PORT ?? 3000;

/**
 * Función que procesa cada petición (request) y respuesta (response).
 * Se ejecuta cada vez que alguien entra a una URL de nuestro servidor.
 */
const processRequest = (req, res) => {
  // Por defecto, configuramos que la respuesta será HTML con codificación UTF-8
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/") {
    // Ruta de inicio
    res.end("<h1>Hola Mundxd</h1>");
  } else if (req.url === "/imagen-super-bonita.png") {
    /**
     * Ruta para servir una imagen.
     * fs.readFile lee el archivo del disco.
     * Nota: Aunque la URL sea '.png', estamos leyendo un '.jpg' como ejemplo.
     */
    fs.readFile("./images.jpg", (err, data) => {
      if (err) {
        // Si el archivo no existe o no se puede leer, enviamos un 500 (Internal Server Error)
        res.statusCode = 500;
        res.end("Error al leer la imagen");
      } else {
        // IMPORTANTE: Cambiamos el Content-Type de HTML a imagen JPEG
        res.setHeader("Content-Type", "image/jpeg");
        // Enviamos el buffer de datos de la imagen directamente
        res.end(data);
      }
    });
  } else if (req.url === "/contacto") {
    // Ruta de contacto
    res.end("<h1>Contacto</h1>");
  } else {
    // Cualquier otra ruta que no coincida devuelve un 404 (Not Found)
    res.statusCode = 404;
    res.end("<h1>Página no encontrada</h1>");
  }
};

// Creamos el servidor pasando nuestra función de procesamiento
const server = http.createServer(processRequest);

// Ponemos al servidor a escuchar en el puerto definido
server.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${desiredPort}`,
  );
});
