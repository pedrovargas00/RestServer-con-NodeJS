const Role = require('../models/role');
const Usuario = require('../models/usuario');

const roleValido = async(role = '') => {
   const existeRol = await Role.findOne({role});

   if (!existeRol)
      throw new Error(`El rol ${role} no es válido`);
}

const emailExiste = async(correo = '') => {
   const existeEmail = await Usuario.findOne({correo});
   if (existeEmail)
      throw new Error(`El correo ${correo} ya está registrado`);
}

const existeUsuarioPorID = async(id) => {

   const existeUsuario = await Usuario.findById(id);

   if(!existeUsuario)
      throw new Error(`El usuario con ID ${id} no existe`);

};

module.exports = {
   roleValido,
   emailExiste,
   existeUsuarioPorID};