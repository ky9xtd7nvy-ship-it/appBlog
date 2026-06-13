const postSchema = require('../schemas/posts.schema');

const validatePost = async (req, res, next) => {
    try {
        await postSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        const errorsFormat = error.inner.map(err => ({
            campo: err.path,
            mensaje: err.message
        }));
        res.status(400).json({
            error: 'Errores de validacion en los datos de post',
            detalles: errorsFormat
        });
    }
};

module.exports = {
    validatePost
};