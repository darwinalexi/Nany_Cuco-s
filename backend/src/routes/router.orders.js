import { Router } from "express";
import {search, create_orders, show_orders, update_orders, count_orders, count_orders_sould, delete_orders, sold_value  } from "../controller/controller.orders.js";
export const router_order= Router();


router_order.post("/pedidos", create_orders)
router_order.get("/pedidos", show_orders)
router_order.get("/pedidos/:id", search)
router_order.put("/pedidos/:id", update_orders)
router_order.get("/contarpedidos",count_orders )
router_order.get("/contarpedidosvendidos", count_orders_sould)

router_order.delete("/pedidos/:id", delete_orders)
router_order.get("/vendido", sold_value)
