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

const update = async (bookNewData, id) => {
  const [updatedBook] = await Book.update(
    bookNewData,
    {
      where: {
        id: id
      }
    }
  );

  if (updatedBook === 0) return { code: 404, message: 'book not found' };

  if (updatedBook === 1) return await Book.findByPk(id);

  return updatedBook;
}

const deleteBook = async (id) => {
  const deletedBook = await Book.destroy(
    { where: { id } },
  );
  
  console.log(deletedBook);
  return deletedBook;
}

module.exports = {
  findAll,
  findByPk,
  create,
  update,
  deleteBook,
}