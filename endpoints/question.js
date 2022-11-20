const express = require('express');
const { Question } = require('../models/question');
const questionsRouter = express.Router();

questionsRouter.get('/tests/:id/questions', async (req, res) => {
    const questions = await Question.find({
        test: req.params.id,
    });
    res.json(questions);
});

module.exports = { questionsRouter };