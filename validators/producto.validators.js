import { checkSchema } from "express-validator";

export const productoValidator = checkSchema({
    producto :{
        errorMessage : 'Producto Necesario',
        notEmpty: true
    }
},["query"])