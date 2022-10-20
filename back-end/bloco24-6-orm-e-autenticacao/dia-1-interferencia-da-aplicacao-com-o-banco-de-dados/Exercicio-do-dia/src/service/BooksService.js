const { Book } = require('../models')
// com o método getAll para retornar uma lista de livros por meio do model Book
const getAll = async () => {
const books = await Book.findAll();
return books;
};

module.exports = {
    getAll,
  };