const authorSchema = require('../schemas/autores.schema');

const validateAuthor = async (req, res, next) => {
    try {
        await authorSchema.validate(req.body, { abortEarly: false});
        next();
    } catch (error) {
        const errorsFormat = error.inner.map(err => ({
            campo: err.path,
            mensaje: err.message
        }));
        res.status(400).json({
            error: 'Errores de validacion en los datos de autor',
            detalles: errorsFormat
        });
    }
};

module.exports = {
    validateAuthor
};
