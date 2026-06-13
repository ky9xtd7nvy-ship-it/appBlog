require ('dotenv').config();
const app = require('./app');
const pool = require('./src/config/db')
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await pool.query('SELECT 1')
        console.log('Conexión establecida a la base de datos ');

        app.listen(PORT, () => {
            console.log(`Servidor escuchando en http://localhost:${PORT}`);
        });
    }
    catch(error) {
        console.error('Error al establecer conexión con la base de datos', error.message);   
        process.exit(1);
    }
}

startServer();

