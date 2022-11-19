const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Test = mongoose.model('Test', {
    title: String,
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    joinCode: String,
    generationDate: Date,
    difficulty: String,
});

module.exports = { Test };