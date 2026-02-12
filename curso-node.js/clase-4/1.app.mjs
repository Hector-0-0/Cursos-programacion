// //1.app.mjs

import express from "express";
// Importamos el enrutador de películas (capa de rutas)
import { moviesRouter } from "./routes/movies.mjs";
// Importamos nuestro middleware personalizado de seguridad (capa de seguridad)
import { middlewareCors } from "./middlewares/cors.mjs";

const app = express();

/** * Middleware nativo de Express:
 * Transforma el cuerpo de las peticiones (body) que vienen en JSON a objetos JS.
 * Es vital para que funcionen el POST y el PATCH.
 */
app.use(express.json());

/**
 * Seguridad:
 * Deshabilita la cabecera 'x-powered-by: Express'.
 * Esto evita dar pistas a posibles atacantes sobre qué tecnología usas.
 */
app.disable("x-Powered-by");

/**
 * Nuestro middleware de CORS:
 * Se coloca ANTES de las rutas para que todas las peticiones pasen
 * primero por el control de acceso y tengan las cabeceras correctas.
 */
app.use(middlewareCors);

/**
 * Definición de la ruta base para el recurso:
 * Le decimos a la app que todas las peticiones que empiecen con "/movies"
 * deben ser gestionadas por el 'moviesRouter'.
 */
app.use("/movies", moviesRouter);

/**
 * Configuración del puerto:
 * Intentamos usar el puerto que nos dé el sistema (variable de entorno)
 * o usamos el 3000 por defecto.
 */
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
