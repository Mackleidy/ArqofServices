import pgService from "../services/pg.services.js";

export const getProductoModel = async () => {
    const pg = new pgService ();
    return await pg.connection.query("select * from producto");
}