const { connectMysql } = require('../dbconnection');
class ObrasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('obras');
        return await query;
    }
    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('obras').where('id_obra', id);
    }
}

module.exports = ObrasModel;