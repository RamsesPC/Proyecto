const express = require('express');
const app = express();
const puerto = 80;
const ObrasController = require('./controllers/ObrasController');
const ArtistaController = require('./controllers/ArtistaController');
const CompradorController = require('./controllers/CompradorController');
const TransController = require('./controllers/TransController');
const UsuarioController = require('./controllers/UsuarioController');
const cors = require('cors');

app.use(cors()); 

app.use(express.json());
const port = 3100;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('hola');
});

app.get('/obras', ObrasController.indexGet);
app.get('/obras/:id([0-9]+)', ObrasController.itemGet);
app.post('/obras', ObrasController.indexPost);
app.put('/obras/:id([0-9]+)', ObrasController.itemPut);
app.patch('/obras/:id([0-9]+)', ObrasController.itemPatch);
app.delete('/obras/:id([0-9]+)', ObrasController.itemDelete);

app.get('/artista', ArtistaController.indexGet);
app.get('/artista/:id([0-9]+)', ArtistaController.itemGet);
app.post('/artista', ArtistaController.indexPost);
app.put('/artista/:id([0-9]+)', ArtistaController.itemPut);
app.patch('/artista/:id([0-9]+)', ArtistaController.itemPatch);
app.delete('/artista/:id([0-9]+)', ArtistaController.itemDelete);

app.get('/comprador', CompradorController.indexGet);
app.get('/comprador/:id([0-9]+)', CompradorController.itemGet);
app.post('/comprador', CompradorController.indexPost);
app.put('/comprador/:id([0-9]+)', CompradorController.itemPut);
app.patch('/comprador/:id([0-9]+)', CompradorController.itemPatch);
app.delete('/comprador/:id([0-9]+)', CompradorController.itemDelete);

app.get('/trans', TransController.indexGet);
app.get('/trans/:id([0-9]+)', TransController.itemGet);
app.post('/trans', TransController.indexPost);
app.put('/trans/:id([0-9]+)', TransController.itemPut);
app.patch('/trans/:id([0-9]+)', TransController.itemPatch);
app.delete('/trans/:id([0-9]+)', TransController.itemDelete);

app.get('/usuario', UsuarioController.indexGet);
app.get('/usuario/:id([0-9]+)', UsuarioController.itemGet);
app.post('/usuario', UsuarioController.indexPost);
app.put('/usuario/:id([0-9]+)', UsuarioController.itemPut);
app.patch('/usuario/:id([0-9]+)', UsuarioController.itemPatch);
app.delete('/usuario/:id([0-9]+)', UsuarioController.itemDelete);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor ejecutándose en el puerto ${port}');
  });