//2.routing.mjs

import http from "node:http";
// Importación de JSON en ESM usando "Import Attributes"
import data from "./ditto.json" with { type: "json" };

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          // Enviamos los datos del JSON que importamos arriba
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(data));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404 Not Found</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          let body = "";

          // Escuchamos el evento 'data' para recibir los trozos (chunks) de información
          // Node.js recibe el cuerpo de la petición por partes para ser más eficiente
          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          // El evento 'end' indica que ya terminamos de recibir todos los datos
          req.on("end", () => {
            const data = JSON.parse(body);

            // Simulación: Aquí iría la lógica para guardar en una Base de Datos

            // Respondemos con un 201 (Created) para indicar éxito en la creación
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.end(JSON.stringify(data));
          });
          break;
        }
        default:
          res.statusCode = 404;
          return res.end("Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto http://localhost:3000");
});
