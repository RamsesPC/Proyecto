const { connectMysql } = require('../dbconnection');

class ArtistaModel {
    static async consultar() {
        const db = await connectMysql();
        return await db.select('*').from('artista');
    }

    static async consultarPorId(id) {
        const db = await connectMysql();
        return await db('artista').where('id_artista', id);
    }

    static async insertar(datos) {
        const db = await connectMysql();
        // Insertamos solo los campos definidos en la estructura de la base de datos
        const result = await db('artista').insert({
            nombre: datos.nombre,
            curriculum: datos.curriculum || null,
            declaracion: datos.declaracion,
            foto: datos.foto || null,
            razon_social: datos.razon_social,
            rfc: datos.rfc,
            domicilio: datos.domicilio,
            estado: datos.estado,
            ciudad: datos.ciudad,
            cp: datos.cp,
            celular: datos.celular,
            correo: datos.correo,
            ine: datos.ine || null,
            cuenta_bancaria: datos.cuenta_bancaria,
            beneficiario_nombre: datos.beneficiario_nombre,
            beneficiario_telefono: datos.beneficiario_telefono,
            beneficiario_correo: datos.beneficiario_correo
        }).returning('id_artista');
        return result[0];
    }

    static async actualizar(id, campos) {
        const db = await connectMysql();
        // Filtrar para asegurarse de que solo los campos válidos se actualicen
        const camposActualizados = {};
        if (campos.nombre) camposActualizados.nombre = campos.nombre;
        if (campos.curriculum) camposActualizados.curriculum = campos.curriculum;
        if (campos.declaracion) camposActualizados.declaracion = campos.declaracion;
        if (campos.foto) camposActualizados.foto = campos.foto;
        if (campos.razon_social) camposActualizados.razon_social = campos.razon_social;
        if (campos.rfc) camposActualizados.rfc = campos.rfc;
        if (campos.domicilio) camposActualizados.domicilio = campos.domicilio;
        if (campos.estado) camposActualizados.estado = campos.estado;
        if (campos.ciudad) camposActualizados.ciudad = campos.ciudad;
        if (campos.cp) camposActualizados.cp = campos.cp;
        if (campos.celular) camposActualizados.celular = campos.celular;
        if (campos.correo) camposActualizados.correo = campos.correo;
        if (campos.ine) camposActualizados.ine = campos.ine;
        if (campos.cuenta_bancaria) camposActualizados.cuenta_bancaria = campos.cuenta_bancaria;
        if (campos.beneficiario_nombre) camposActualizados.beneficiario_nombre = campos.beneficiario_nombre;
        if (campos.beneficiario_telefono) camposActualizados.beneficiario_telefono = campos.beneficiario_telefono;
        if (campos.beneficiario_correo) camposActualizados.beneficiario_correo = campos.beneficiario_correo;

        return await db('artista').where('id_artista', id).update(camposActualizados);
    }

    static async reemplazar(id, newData) {
        const db = await connectMysql();
        newData.id_artista = id;
        await db('artista').where('id_artista', id).del();
        await db('artista').insert(newData);
        return id;
    }

    static async eliminar(id) {
        const db = await connectMysql();
        return await db('artista').where('id_artista', id).del();
    }
}

module.exports = ArtistaModel;
