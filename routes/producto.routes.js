import { Router } from "express";
import { getProducto } from "../controllers/producto.controllers.js";
import { productoValidator } from "../validators/producto.validators.js";

const router = Router();

router.get("/", validate(productoValidator) , getProducto);
   

export default router;