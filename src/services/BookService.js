const { Book } = require('../models');


const findAll = async () => {
  const books = await Book.findAll();

  return books;
}

const findByPk = async (id) => {
  const book = await Book.findByPk(id);

  if(!book) return { code: 404, message: 'Book not found' };
  
  return book;
}

const create = async (newBookData) => {
  const createdBook = await Book.create(newBookData);
  
  return createdBook;
}

module.exports = {
  findAll,
  findByPk,
  create,
}