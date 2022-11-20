const express = require('express');
const { Test } = require('../models/test');
const {Question} = require("../models/question");
const testsRouter = express.Router();

testsRouter.post('/tests/:id/submit', async (req, res) => {
    const questions = await Question.find({
        test: req.params.id,
    });

    let points = 0;

    const submittedAnswers = req.body;

    for(const question of questions) {
        const submittedAnswerIndex = submittedAnswers[question._id];
        if (submittedAnswerIndex) {
            const answer = question.answers[submittedAnswerIndex];
            if (answer.valid) {
                points++;
            }
        }
    }

    const respond = {
        correct: points,
        available: submittedAnswers.length,
    };

    res.json(respond);
});

testsRouter.get('/tests/byJoinCode/:joinCode', async (req, res) => {
    const { joinCode } = req.params;
    const test = await Test.findOne({ joinCode });
    res.json(test);
});

module.exports = { testsRouter };