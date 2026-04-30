//* Se importa el modelo de articulos
import { articulosModel } from "../model/articulos.model.js";

//* Traer todos los articulos
export const getArticulos = async (req, res) => {
  try {
    const results = await articulosModel.findAll();
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los articulos" + error,
    });
  }
};
//* Traer todos las categorias
export const getCategorias = async (req, res) => {
  try {
    const results = await articulosModel.findAllCategorias();
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar las categorias" + error,
    });
  }
};
//* Traer articulo por ID
export const getArticulosById = async (req, res) => {
  try {
    const results = await articulosModel.findById(req.params.id);
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar el articulo",
    });
  }
};
//* Crear un articulo
export const postArticulos = async (req, res) => {
  try {
    const datos = {
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      imagen: req.file.filename,
      estado: "Activo",
      fecha: new Date(),
      categoria_id: req.body.categoria_id,
    };

    const results = await articulosModel.insert(datos);

    res.json({
      status: "success",
      results,
    });
  } catch (error) {
    res.status(500).json({
      error: "error al registrar el articulo",
      error,
    });
  }
};
//* Modificar un articulo
export const putArticulos = async (req, res) => {
  try {
    const results = await articulosModel.update(req.params.id, req.body);
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al editar el Articulo",
    });
  }
};
//* Cambiar estado a Activo
export const activateArticulos = async (req, res) => {
  try {
    const results = await articulosModel.activate(req.params.id);
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al activar el Articulo",
    });
  }
};
//* Cambiar estado a Inactivo
export const inactivateArticulos = async (req, res) => {
  try {
    const results = await articulosModel.inactivate(req.params.id);
    res.json({ status: "success", results });
  } catch (error) {
    res.status(500).json({
      error: "error al inactivar el Articulo",
    });
  }
};
