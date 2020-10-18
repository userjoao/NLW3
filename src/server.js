//importar lib
const express = require('express');
const path = require('path');
const pages = require('./page.js');

//iniciando o expressions
const server = express();

//utilizando os arquivos estáticos
server.use(express.static('public'));


//configurar template engines
server
    .set('views',path.join(__dirname,"views"))
    .set('view engine','hbs');


//criar  rotas
server.get('/',pages.index)
server.get('/orphanage',pages.orphanage)
server.get('/orphanages',pages.orphanages)
server.get('/create-orphanage',pages.createOrphanage)


//ligar o servidores
server.listen(5500);