const { connectMysql } = require('../dbconnection');
class ArtistaModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('artista');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('artista').where('id_artista', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('artista').insert(datos).returning('id_artista');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('artista').where('id_artista', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_artista'] = id;
        await db('artista').where('id_artista', id).del();
        await db.insert(newData).into('artista');
        return id;
    }

    static async eliminar(id) {
        let db = await connectMysql();
        return await db('artista').where('id_artista', id).del();
    }
}


module.exports = ArtistaModel;