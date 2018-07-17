'use strict';

const express = require('express');

const app = express();

const {
    router,
} = require('./routes');
const {
    ErrorMiddleware,
} = require('./middlewares');

app.use('/', router);
app.use(ErrorMiddleware.handleError);

module.exports = {
    app,
};
