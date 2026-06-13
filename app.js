const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Blog funcionando correctamente');
    });

const apiRouter = require('./src/routes/api');
app.use('/api', apiRouter);

module.exports = app;