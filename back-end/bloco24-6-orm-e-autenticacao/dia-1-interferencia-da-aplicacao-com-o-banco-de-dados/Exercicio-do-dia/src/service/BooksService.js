const { Book } = require('../models')
// com o método getAll para retornar uma lista de livros por meio do model Book
const getAll = async () => {
const books = await Book.findAll();
return books;
};


const getById = async (idBook) => {
const bookID = await Book.getAll(idBook);
return bookID;
};

module.exports = {
    getAll,
    getById,
  };