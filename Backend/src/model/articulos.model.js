//! Modelo para articulos

//* Importacion de Base de datos
import cnx from "./db.model.js";
//* Activar async en consultas
const db = cnx.promise();

//* Modelo de articulos
export const articulosModel = {
  //? Listar todos los articulos
  findAll: async function () {
    const sql = `SELECT
    art.id,
    art.titulo,
    art.contenido,
    art.fecha,
    art.imagen,
    art.estado,
    cat.id as id_categoria,
    cat.nombre as categoria
    FROM articulos as art JOIN categoria as cat ON cat.id = art.categoria_id WHERE art.estado = 'Activo' ORDER BY art.categoria_id ASC`;
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return rows;
  }, 
  //? Traer categorias articulo
  findAllCategorias: async function () {
    const sql = "SELECT * FROM categoria;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql);
    return rows;
  },
  //? Listar articulo por ID
  findById: async function (id) {
    const sql = "SELECT * FROM articulos WHERE id = ? ORDER BY id ASC;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return rows;
  },
  //? Crear articulo
  insert: async function (datos) {
    const sql = "INSERT INTO articulos SET ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos]);
    return rows;
  },
  //? Modificar articulo
  update: async function (id, datos) {
    const sql = "UPDATE articulos SET ? WHERE id = ?";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, [datos, id]);
    return rows;
  },
  //? Activar articulo
  activate: async function (id) {
    const sql = "UPDATE articulos SET estado = 'Activo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return rows;
  },
  //? Desactivar articulo
  inactivate: async function (id) {
    const sql = "UPDATE articulos SET estado = 'Inactivo' WHERE id = ?;";
    //? Se almacenan los datos en un array
    const [rows] = await db.query(sql, id);
    return rows;
  },
};
