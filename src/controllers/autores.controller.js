const autoresModel = require('../models/autores.model');

// Obtener todos los autores
const getAllAuthors = async (req, res) => {
    try {
        const authors = await autoresModel.getAllAuthors();
        res.json(authors);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener lista de autores',
            detail: error.message
        });
    }
};

// Crear nuevo autor
const createAuthor = async (req, res) => {
    const {
        nombre,
        email,
        imagen
    } = req.body;
    try {
        const insertId = await autoresModel.createAuthor({
            nombre,
            email,
            imagen
        });
        res.status(201).json({
            id: insertId,
            nombre,
            email,
            imagen: imagen || null
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({
                error: 'El correo electronico ya esta utilizado por otro usuario'
            });
        }
        res.status(500).json({
            error: 'Error al crear nuevo autor',
            detail: error.message
        });
    }
};

module.exports = {
    getAllAuthors,
    createAuthor
};
