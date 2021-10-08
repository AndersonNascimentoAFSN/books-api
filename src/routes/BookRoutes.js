const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.findAll);
router.get('/:id', BookController.findByPk);

module.exports = router;