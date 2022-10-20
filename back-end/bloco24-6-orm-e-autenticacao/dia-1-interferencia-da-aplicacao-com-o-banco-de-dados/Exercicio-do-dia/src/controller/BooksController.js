const BooksService = require('../service/BooksService');

const getAll = async (req, res) => {
    try {
        const books = await BooksService.getAll();
        return res.status(200).json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'ocorreu um erro'});
    };
};

module.exports = {
    getAll,
}