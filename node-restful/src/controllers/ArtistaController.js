const ArtistaModel = require('../models/artista');

class ArtistaController {
    static async indexGet(req, res) {
        try {
            let data = await ArtistaModel.consultar();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = {
                nombre: req.body.nombre,
                curriculum: req.files?.curriculum ? req.files.curriculum[0].buffer : null,
                declaracion: req.body.declaracion,
                foto: req.files?.foto ? req.files.foto[0].buffer : null,
                razon_social: req.body.razonSocial,
                rfc: req.body.rfc,
                domicilio: req.body.domicilio,
                estado: req.body.estado,
                ciudad: req.body.ciudad,
                cp: req.body.cp,
                celular: req.body.celular,
                correo: req.body.correo,
                ine: req.files?.ine ? req.files.ine[0].buffer : null,
                cuenta_bancaria: req.body.cuentaBancaria,
                beneficiario_nombre: req.body.beneficiarioNombre,
                beneficiario_telefono: req.body.beneficiarioTelefono,
                beneficiario_correo: req.body.beneficiarioCorreo
            };

            const insertedId = await ArtistaModel.insertar(newData);

            res.status(201)
                .header('Location', `/artista/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemGet(req, res) {
        try {
            let id = req.params.id;
            let data = await ArtistaModel.consultarPorId(id);
            if (data.length === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
                return;
            }
            res.send(data[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = {
                nombre: req.body.nombre,
                curriculum: req.files?.curriculum ? req.files.curriculum[0].buffer : null,
                declaracion: req.body.declaracion,
                foto: req.files?.foto ? req.files.foto[0].buffer : null,
                razon_social: req.body.razonSocial,
                rfc: req.body.rfc,
                domicilio: req.body.domicilio,
                estado: req.body.estado,
                ciudad: req.body.ciudad,
                cp: req.body.cp,
                celular: req.body.celular,
                correo: req.body.correo,
                ine: req.files?.ine ? req.files.ine[0].buffer : null,
                cuenta_bancaria: req.body.cuentaBancaria,
                beneficiario_nombre: req.body.beneficiarioNombre,
                beneficiario_telefono: req.body.beneficiarioTelefono,
                beneficiario_correo: req.body.beneficiarioCorreo
            };

            const result = await ArtistaModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            if (req.files) {
                if (req.files.curriculum) updatedFields.curriculum = req.files.curriculum[0].buffer;
                if (req.files.foto) updatedFields.foto = req.files.foto[0].buffer;
                if (req.files.ine) updatedFields.ine = req.files.ine[0].buffer;
            }

            const result = await ArtistaModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successful partial update' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemDelete(req, res) {
        try {
            const id = req.params.id;

            const result = await ArtistaModel.eliminar(id);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Deleted successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = ArtistaController;
