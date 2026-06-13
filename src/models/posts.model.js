const pool = require('../config/db');

// Obtener todos los posts incluso los datos del autor perteneciente
const getAllPostsWithAuthors = async () => {
    const [rows] = await pool.query(`
        SELECT
            p.id AS post_id, 
            p.titulo, 
            p.descripcion,
            p.fecha_creacion,
            p.categoria,
            a.id AS autor_id,
            a.nombre AS autor_nombre,
            a.email AS autor_email,
            a.imagen AS autor_imagen
        FROM posts p
        INNER JOIN autores a ON
            p.autor_id = a.id
        `);
    return rows; 
};

// Obtener los posts escritos por un autor concreto
const getPostsByAuthor = async (autorId) => {
    const [rows] = await pool.query(`
        SELECT
            p.id AS post_id,
            p.titulo,
            p.descripcion,
            p.fecha_creacion,
            p.categoria,
            a.nombre AS autor_nombre,
            a.email AS autor_email
        FROM posts p
        INNER JOIN autores a ON
            p.autor_id = a.id
        WHERE
            p.autor_id = ?
    `, [autorId]);
    return rows;
};

// Crear un post nuevo vinculado a un autor existente
const createPost = async ({
    titulo,
    descripcion,
    categoria,
    autor_id
}) => {
    const [result] = await pool.query(`
        INSERT INTO posts (
            titulo,
            descripcion,
            categoria,
            autor_id)
        VALUES (?, ?, ?, ?)
       `, [titulo, descripcion, categoria, autor_id]
    );
    return result.insertId;
};

module.exports = {
    getAllPostsWithAuthors,
    getPostsByAuthor,
    createPost
}