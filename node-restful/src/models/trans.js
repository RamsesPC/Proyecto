const { connectMysql } = require('../dbconnection');
class TransModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('transaccion');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('transaccion').where('id_transaccion', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('transaccion').insert(datos).returning('id_transaccion');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('transaccion').where('id_transaccion', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_transaccion'] = id;
        await db('transaccion').where('id_transaccion', id).del();
        await db.insert(newData).into('transaccion');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('transaccion').where('id_transaccion', id).del();
    }
}


module.exports = TransModel;