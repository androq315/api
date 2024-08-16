const express = require('express');

const respuesta = require('../../red/respuesta')
const controlador = require('./controlador');


const router = express.Router();

router.get('/', todos);
router.get('/:id', uno);
router.put('/', eliminar);

async function todos(req, res) {
    try {
        const items = controlador.todos()
            .then((items) => {
            respuesta.success(req, res, items, 200)
            })
    } catch (err) {
        next(err)
    }


    
};

async function uno(req, res, next) {

};

async function eliminar(req, res, next) {
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, 'item eliminado', 200);
    } catch (err) {
        next(err)
    }
};




module.exports = router