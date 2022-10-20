const express = require('express');

const BookController = require('./controller/BooksController');

const app = express();

app.use(express.json());

app.get('./books', BookController.getAll);
app.get('./books/id', BookController.getId);
app.post('./books', BookController.addNewBook);