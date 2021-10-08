const BookService = require('../services/BookService');

const findAll = async (_req, res, next) => {
  try {
    const books = await BookService.findAll();

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    next(err)
    // res.status(500).json({ message: err.message });
  }
}

const findByPk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BookService.findByPk(id);

    if(book.message) return res.status(book.code).json({message: book.message});

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
}

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const createdBook = await BookService.create({ title, author, pageQuantity });

    res.status(201).json(createdBook);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  findAll,
  findByPk,
}