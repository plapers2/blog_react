import MySQL from "mysql2";
import dotenv from "dotenv";
dotenv.config();
let cnx;
try {
  cnx = MySQL.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT_BD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
} catch (error) {
  console.log(`Ah ocurrido un error en la conexion: ${error.message}`);
}
export default cnx;
