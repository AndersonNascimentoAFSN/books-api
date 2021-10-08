const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.findAll);

module.exports = router;