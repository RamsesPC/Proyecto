const { connectMysql } = require('../dbconnection');
class CompradorModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('comprador');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('comprador').where('id_comprador', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('comprador').insert(datos).returning('id_comprador');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('comprador').where('id_comprador', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_comprador'] = id;
        await db('comprador').where('id_comprador', id).del();
        await db.insert(newData).into('comprador');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('comprador').where('id_comprador', id).del();
    }
}


module.exports = CompradorModel;