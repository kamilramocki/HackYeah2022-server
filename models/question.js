const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Question = mongoose.model('Question', {
    content: String,
    type: String,
    answers: [{
        content: String,
        valid: Boolean,
    }],
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
});

module.exports = { Question };