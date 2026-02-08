// 8.free-port.mjs

import net from "node:net"; // Módulo para redes TCP

export function findAvailablePort(desiredPort) {
  return new Promise((resolve, reject) => {
    // Creamos un servidor TCP temporal
    const server = net.createServer();

    // Intentamos escuchar en el puerto deseado
    server.listen(desiredPort, () => {
      // Si logramos escuchar, extraemos el puerto
      const { port } = server.address();

      // Cerramos el servidor temporal para dejar el puerto libre de nuevo
      server.close(() => {
        resolve(port); // Devolvemos el puerto disponible
      });
    });

    // Si ocurre un error al intentar escuchar...
    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        /**
         * Si el error es "Puerto en uso", llamamos a la función de nuevo
         * pero con el puerto 0. El puerto 0 asigna uno libre al azar.
         */
        findAvailablePort(0).then((port) => resolve(port));
      } else {
        // Si es otro tipo de error, rechazamos la promesa
        reject(err);
      }
    });
  });
}
