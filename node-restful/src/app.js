const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Configuración del puerto
const port = 3100;

// Configuración de almacenamiento de multer en memoria para procesar archivos binarios
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Importación de controladores
const ObrasController = require('./controllers/ObrasController');
const ArtistaController = require('./controllers/ArtistaController');
const CompradorController = require('./controllers/CompradorController');
const TransController = require('./controllers/TransController');
const UsuarioController = require('./controllers/UsuarioController');

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de inicio
app.get('/', (req, res) => {
    res.status(200).send('hola');
});

// Rutas para obras
app.get('/obras', ObrasController.indexGet);
app.get('/obras/:id([0-9]+)', ObrasController.itemGet);
app.post('/obras', upload.fields([{ name: 'fotoObra' }, { name: 'certificado' }]), ObrasController.indexPost);
app.put('/obras/:id([0-9]+)', upload.fields([{ name: 'fotoObra' }, { name: 'certificado' }]), ObrasController.itemPut);
app.patch('/obras/:id([0-9]+)', upload.fields([{ name: 'fotoObra' }, { name: 'certificado' }]), ObrasController.itemPatch);
app.delete('/obras/:id([0-9]+)', ObrasController.itemDelete);

// Rutas para artistas
app.get('/artista', ArtistaController.indexGet);
app.get('/artista/:id([0-9]+)', ArtistaController.itemGet);
app.post('/artista', upload.fields([{ name: 'curriculum' }, { name: 'foto' }, { name: 'ine' }]), ArtistaController.indexPost);
app.put('/artista/:id([0-9]+)', upload.fields([{ name: 'curriculum' }, { name: 'foto' }, { name: 'ine' }]), ArtistaController.itemPut);
app.patch('/artista/:id([0-9]+)', upload.fields([{ name: 'curriculum' }, { name: 'foto' }, { name: 'ine' }]), ArtistaController.itemPatch);
app.delete('/artista/:id([0-9]+)', ArtistaController.itemDelete);

// Rutas para compradores
app.get('/comprador', CompradorController.indexGet);
app.get('/comprador/:id([0-9]+)', CompradorController.itemGet);
app.post('/comprador', CompradorController.indexPost);
app.put('/comprador/:id([0-9]+)', CompradorController.itemPut);
app.patch('/comprador/:id([0-9]+)', CompradorController.itemPatch);
app.delete('/comprador/:id([0-9]+)', CompradorController.itemDelete);

// Rutas para transacciones
app.get('/trans', TransController.indexGet);
app.get('/trans/:id([0-9]+)', TransController.itemGet);
app.post('/trans', TransController.indexPost);
app.put('/trans/:id([0-9]+)', TransController.itemPut);
app.patch('/trans/:id([0-9]+)', TransController.itemPatch);
app.delete('/trans/:id([0-9]+)', TransController.itemDelete);

// Rutas para usuarios
app.get('/usuario', UsuarioController.indexGet);
app.get('/usuario/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuario', UsuarioController.indexPost);
app.put('/usuario/:id([0-9]+)', UsuarioController.itemPut);
app.patch('/usuario/:id([0-9]+)', UsuarioController.itemPatch);
app.delete('/usuario/:id([0-9]+)', UsuarioController.itemDelete);

// Inicialización del servidor
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
