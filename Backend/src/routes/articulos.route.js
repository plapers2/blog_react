import { Router } from "express";
import * as articulosController from "../controllers/articulos.controller.js";
import upload from "../middleware/articulos.middleware.js";

const router = Router();

//* Creacion de rutas para api
//? listar todos
router.get("/articulos/listarTodos", articulosController.getArticulos);
//? Listar Categorias
router.get("/articulos/listarCategorias", articulosController.getCategorias);
//? listar por id
router.get("/articulos/listarPorId/:id", articulosController.getArticulosById);
//? Crear
router.post("/articulos/crear", upload.single("imagen"), articulosController.postArticulos);
//? Actualizar
router.put("/articulos/editar/:id", articulosController.putArticulos);
//? Desactivar (logico)
router.put("/articulos/desactivar/:id", articulosController.inactivateArticulos);
//? Restaurar (logico)
router.put("/articulos/restaurar/:id", articulosController.activateArticulos);


export default router;
