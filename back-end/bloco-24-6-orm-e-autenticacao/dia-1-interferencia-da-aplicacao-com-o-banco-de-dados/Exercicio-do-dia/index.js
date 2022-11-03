const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));


const BookController = require('./src/controller/BooksController');



app.get('/books', BookController.getAll);
app.get('/books/id', BookController.getId);
app.post('/books', BookController.addNewBook);