import { query } from "express";
import { getProductoModel } from "../models/producto.models.js";

export const getProducto = async (req, res) => {
    console.log("get Producto");
    let data = await getProductoModel();
    res.send({msg: 'get Producto', data : data})
}

