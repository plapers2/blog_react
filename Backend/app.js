import express from "express";
import cors from "cors";
//* Importar rutas de articulos
import articulosRutas from "./src/routes/articulos.route.js";
// Instancia global
const app = express();

//* Middlewares necesarios
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

//* Uso de rutas
app.use("/api", articulosRutas);

export default app;
