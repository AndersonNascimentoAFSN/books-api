const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.findAll);
router.get('/:id', BookController.findByPk);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.deleteBook);

module.exports = router;