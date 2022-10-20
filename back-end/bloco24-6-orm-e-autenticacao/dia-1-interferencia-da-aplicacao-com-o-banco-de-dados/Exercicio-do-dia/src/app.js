const express = require('express');

const Book = require('./controller/BooksController');

const app = express();

app.use(express.json());

app.get('./books', Book);