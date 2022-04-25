const fs = require ('fs');

let visitados = require('../data/datosProductos')
let homeModel = {
    leerTodos: function () {
        console.log('leo productos desde data')
        return visitados
    }
}




module.exports = homeModel