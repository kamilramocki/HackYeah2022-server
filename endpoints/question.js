const express = require('express');
const { Question } = require('../models/question');
const questionsRouter = express.Router();

questionsRouter.get('/tests/:id/questions', async (req, res) => {
    const question = await Question.find({
        test: req.params.id,
    });
    res.json(question);
});

questionsRouter.get('/tests/byJoinCode/:joinCode', async (req, res) => {
    const { joinCode } = req.params;
    const question = await Question.findOne({ joinCode });
    res.json(question);
});

module.exports = { questionsRouter };