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

const getId = async (req,res) => {
    const book = await BooksService.getById(req.params.id);
    if(!book){
        return res.status(404).json({message: ' book not found'});
    }
    return res.status(200).json(book);
}

module.exports = {
    getAll,
    getId,
}