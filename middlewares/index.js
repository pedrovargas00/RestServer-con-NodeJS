const validaCampos = require('../middlewares/validar-campos');
const validaJWT = require('../middlewares/validar-jwt');
const validaRoles = require('../middlewares/validar-roles');
const validarCategorias = require('../middlewares/validar-categorias');
const validarProductos = require('../middlewares/validar-productos');

module.exports = {
   ...validaCampos,
   ...validaJWT,
   ...validaRoles,
   ...validarCategorias,
   ...validarProductos
};