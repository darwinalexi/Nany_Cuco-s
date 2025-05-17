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

const port = 3333;

server.get('/', (req, res) =>{
    res.send('Hola mundo')
})

server.use(express.static('public'));

server.use(cors())
server.use(body_parser.json())
server.use(body_parser.urlencoded({extended:false}))

//configuracion de rutas
server.use(rutaaut)
server.use( productos)
server.use( router_of_user)
server.use(router_order)
server.use(router_client)
server.use(router_venta)

server.listen(port, ()=>{
    console.log("servidor corriendo en el puerto "+port)
})

server.set("view  engine", "ejs")
server.set("views", "./view/")
server.get("/document", (req, res) => {
  res.render("document.ejs")
})