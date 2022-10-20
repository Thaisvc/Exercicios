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

const addBook = async ({title, author, pageQuantity}) => {
const newBook = await Book.create({title, author, pageQuantity});
return newBook;
};

module.exports = {
    getAll,
    getById,
    addBook,
  };