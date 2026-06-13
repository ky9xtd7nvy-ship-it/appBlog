const yup = require('yup');

const postSchema = yup.object({
    titulo: yup.string().trim().required('El título del artículo es obligatorio'),
    descripcion: yup.string().trim().required('La descripción es obligatoria'),
    categoria: yup.string().trim().required('La categoría es obligatoria'),
    autor_id: yup.number().integer().positive().required('El id del autor es obligatorio y debe ser válido')   
});

module.exports = postSchema;
