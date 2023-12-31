const { connectMysql } = require('../dbconnection');
class ObrasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('obra');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('obra').where('id_obra', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('obra').insert(datos).returning('id_obra');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('obra').where('id_obra', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_obra'] = id;
        await db('obra').where('id_obra', id).del();
        await db.insert(newData).into('obra');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('obra').where('id_obra', id).del();
    }
}


module.exports = ObrasModel;