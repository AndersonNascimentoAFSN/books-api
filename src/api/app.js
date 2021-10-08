require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const router = require('../routes');
const errorMiddleware = require('../middlewares/ErrorMiddleware');
const routeNotFound = require('../middlewares/routeNotFound');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/books', router.BookRoutes);

app.use(routeNotFound);

app.use(errorMiddleware);

module.exports = app;