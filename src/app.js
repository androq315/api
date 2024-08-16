const express = require('express');
const config = require('./config');
const clientes = require('./modulos/clientes/rutas');
const morgan = require('morgan');
const app = express();

//midleware
app.use(morgan('dev'));

//configuracion
app.set('port',config.app.port);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//rutas
app.use('/api/clientes', clientes);

module.exports = app;