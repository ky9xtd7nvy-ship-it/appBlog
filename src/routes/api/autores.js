const router = require('express').Router();
const authorsController = require('../../controllers/autores.controller');
const { validateAuthor } = require('../../middlewares/autores.middleware');

router.get('/', authorsController.getAllAuthors);
router.post('/', validateAuthor, authorsController.createAuthor);

module.exports = router;