const postsModel = require('../models/posts.model');

// Obtener todos los posts incluso los datos de autor perteneciente
const getAllPosts = async (req, res) => {
    try {
        const posts = await postsModel.getAllPostsWithAuthors();
        res.json(posts);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener la lista de posts',
            detail: error.message
        });
    }
};

// Obtener todos los posts de un autor especifico
const getPostsByAuthorId = async (req, res) => {
    const { autorId } = req.params;
    try {
        const posts = await postsModel.getPostsByAuthor(autorId);
        res.json(posts);
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener los posts del autor especifico',
            detail: error.message
        });
    }
};
// Crear un nuevo post
const createPost = async (req, res) => {
    const {
        titulo,
        descripcion,
        categoria,
        autor_id
    } = req.body;
    try {
        const insertId = await postsModel.createPost({
            titulo,
            descripcion,
            categoria,
            autor_id
        });

        res.status(201).json({
            id: insertId,
            titulo,
            descripcion,
            categoria,
            autor_id
        });
    } catch (error) {
        if (error.code === 'ER_NO_REFERENCED_ROW_2' || error.code === 'ER_NO_REFERENCED_ROW') {
            return res.status(400).json({
                error: 'El id del autor proporcionado no coincide con ningun autor registrado'
            });
        }
        res.status(500).json({
            error: 'Error al crear nuevo post',
            detail: error.message
        });
    }
};

module.exports = {
    getAllPosts,
    getPostsByAuthorId,
    createPost
};