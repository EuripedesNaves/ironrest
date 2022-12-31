// Requires
const { Router } = require('express');
const Book = require('../models/Book.model.js');

//Environment
require("dotenv").config();

router.post('/book', async (req, res, next) => {
    const { title, author, synopsis, releaseYear, genre, coverImage } = req.body;

    try {
        const newBook= await Book.create({ title, author, synopsis, releaseYear, genre, coverImage })
        res.status(201).json(newBook);


    } catch (error) {
        next(error)
    }

})

module.exports = router;