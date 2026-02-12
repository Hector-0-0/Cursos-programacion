//movies.mjs

// Importamos el constructor Router de express para crear rutas modulares
import Router from "express";
// Importamos el controlador que contiene la lógica para cada ruta
import { MovieController } from "../controllers/movies.mjs";

// Inicializamos el router
export const moviesRouter = Router();

/**
 * Definición de los Endpoints para el recurso 'movies'
 * Nota: Como este router se suele montar en '/movies' en la app principal,
 * aquí usamos "/" para referirnos a la raíz de ese recurso.
 */

// GET /movies - Recuperar todas las películas (con o sin filtro de género)
moviesRouter.get("/", MovieController.getAll);

// GET /movies/:id - Recuperar una película específica por su ID
moviesRouter.get("/:id", MovieController.getById);

// POST /movies - Crear una nueva película
moviesRouter.post("/", MovieController.create);

// PATCH /movies/:id - Actualizar parcialmente una película existente
moviesRouter.patch("/:id", MovieController.update);

// DELETE /movies/:id - Eliminar una película por su ID
moviesRouter.delete("/:id", MovieController.delete);
