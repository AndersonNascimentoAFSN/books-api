const BookService = require('../services/BookService');

const findAll = async (_req, res, next) => {
  try {
    const Book = await BookService.findAll();

    res.status(200).json(Book);
  } catch (err) {
    console.log(err.message);
    next(err)
    // res.status(500).json({ message: err.message });
  }
}

module.exports = {
  findAll,
}