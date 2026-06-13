const yup = require ('yup');

const authorSchema = yup.object({
    nombre: yup.string().trim().required('El nombre del autor es obligatorio'),
    email: yup.string().email('El formato del correo electrónico no es válido').required('El email es obligatorio'),
    imagen: yup.string().url('La imagen debe ser una URL de texto válida').nullable()
});

module.exports = authorSchema;