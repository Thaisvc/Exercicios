const express = require('express');
const BooksController = require('./src/controller/BooksController')
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));


app.post('/books', BooksController.addNewBook);
app.get('/books', BooksController.getAll);
app.get('/books/id', BooksController.getId);