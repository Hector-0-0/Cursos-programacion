//cors.mjs

/**
 * Lista blanca de dominios permitidos.
 * Solo las peticiones que vengan de estas URLs podrán acceder a tus recursos.
 */
const ACEPTED_ORIGINS = [
  "http://localhost:60458", // Tu puerto dinámico de Live Server
  "http://localhost:3000", // Tu propio servidor
  "http://localhost:8080", // Puerto común de aplicaciones Vue/Legacy
];

/**
 * middlewareCors: Función que procesa la seguridad CORS.
 * Se ejecuta antes de llegar a tus rutas de películas.
 */
export const middlewareCors = (req, res, next) => {
  // Extraemos el origen de la cabecera de la petición
  const origin = req.headers.origin;

  // Verificamos si el origen está en nuestra lista de permitidos
  if (ACEPTED_ORIGINS.includes(origin)) {
    // 1. Permitimos el acceso a este origen específico
    res.setHeader("Access-Control-Allow-Origin", origin);

    // 2. Definimos qué verbos HTTP tiene permitido usar el navegador
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, OPTIONS, DELETE",
    );

    // 3. Permitimos que el cliente envíe JSON (Content-Type) en el cuerpo
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  // IMPORTANTE: Le decimos a Express que continúe con la siguiente función/ruta
  next();
};
