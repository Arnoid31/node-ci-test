'use strict';

const router = require('express').Router(); // eslint-disable-line new-cap

const {
    PingController,
} = require('./../controllers');

router.get(
    '/ping/:id',
    (request, response, next) => PingController
        .getInstance()
        .ping(request, response)
        .catch(next)
);

module.exports = {
    router,
};
