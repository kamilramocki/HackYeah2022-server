require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const { categoriesRouter } = require('./endpoints/category');
const { questionsRouter } = require('./endpoints/question');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.use(categoriesRouter);
app.use(questionsRouter);

const start = async () => {
    console.log('Connecting to database...');
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to database!');

    app.listen(process.env.PORT, () => {
        console.log(`App listening on port ${process.env.PORT}.`);
    });
};

start().catch((e) => console.error('Error while starting application.', e));