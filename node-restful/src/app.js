const express = require('express');
const app = express();
const puerto = 80;
const ObrasController = require('./controllers/ObrasController');

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('hola');
});

app.get('/obras', ObrasController.indexGet);
app.get('/obras/:id([0-9]+)', ObrasController.itemGet);

app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});