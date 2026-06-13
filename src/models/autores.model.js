const pool = require ('../config/db.js');

// Obtener todos los autores
const getAllAuthors = async() => {
    const [rows] = await pool.query(
        'SELECT * FROM autores'
    );
    return rows;
};

// Insertar un nuevo autor
const createAuthor = async ({
    nombre,
    email,
    imagen
}) => {
    const [result] = await pool.query(
        'INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)',
        [nombre, email, imagen || null]
    );
    return result.insertId;
};

module.exports = {
    getAllAuthors,
    createAuthor
};