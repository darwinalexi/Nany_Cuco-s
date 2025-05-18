import express from "express";
import body_parser from 'body-parser'
import cors from'cors';
import { rutaaut } from "./src/routes/autentication.js";
import productos from './src/routes/productos_routes.js'
import { router_of_user } from "./src/routes/user.router.js";
import { validarToken } from "./src/controller/atutentication.js";
import {router_client }from"./src/routes/router_client.js"
import {router_order  }from"./src/routes/router.orders.js";
import { router_venta } from "./src/routes/router.sales.js";


const server = express();

// Obtener __dirname correctamente en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Usar puerto dinámico si está en Railway o 3333 localmente
const port = process.env.PORT || 3333;

// Middleware
server.use(cors());
server.use(body_parser.json());
server.use(body_parser.urlencoded({ extended: false }));
server.use(express.static("public"));

// Configuración del motor de vistas
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "view"));

// Ruta raíz
server.get("/", (req, res) => {
  res.send("Hola mundo");
});

// Ruta de vista EJS
server.get("/document", (req, res) => {
  res.render("document.ejs");
});

// Rutas de la API
server.use(rutaaut);
server.use(productos);
server.use(router_of_user);
server.use(router_order);
server.use(router_client);
server.use(router_venta);

// Iniciar servidor
server.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
