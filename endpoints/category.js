const express = require('express');
const { Category } = require('../models/category');
const categoriesRouter = express.Router();

categoriesRouter.get('/', async (req, res) => {
    const category = await Category.find({});
    res.json(category);
});

categoriesRouter.post('/', async (req, res) => {
    const { title } = req.body;

    const category = await Category.create({
        title,
    });

    res.json(category);
});

module.exports = { categoriesRouter };