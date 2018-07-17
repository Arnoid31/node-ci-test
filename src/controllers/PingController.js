'use strict';

const joi = require('joi');

const {
    PingService,
} = require('./../services');

class PingController {

    /**
     *
     * Constructor.
     *
     * @param {PingService} ping_service
     */
    constructor(
        ping_service
    ) {
        this.ping_service = ping_service;
    }

    /**
     *
     * Returns PingController singleton, after eventually having created it.
     *
     * @static
     *
     * @returns {PingController}
     */
    static getInstance() {
        if (PingController.instance === null) {
            PingController.instance = new PingController(
                PingService.getInstance()
            );
        }

        return PingController.instance;
    }

    /**
     *
     * Validates and formats ping request.
     *
     * @static
     *
     * @param {Object} request
     * @param {Object} request.params
     * @param {Number} request.params.id
     *
     * @returns {Promise<Object|Error>}
     */
    static _validatePingRequest(request) {
        return new Promise((resolve, reject) => joi
            .object()
            .keys({
                params: joi
                    .object()
                    .keys({
                        id: joi
                            .number()
                            .integer()
                            .min(1)
                            .required(),
                    })
                    .required(),
            })
            .validate(request, (error, values) => {
                if (error) {
                    return reject(error);
                }

                return resolve(values);
            })
        );
    }

    /**
     *
     * Simple controller.
     *
     * @param {express.Request} request
     * @param {Object} request.params
     * @param {Number} request.params.id
     * @param {express.Response} response
     *
     * @returns {Promise<*>}
     */
    ping(request, response) {
        const {
            params,
        } = request;

        return PingController
            ._validatePingRequest({
                params,
            })
            .then((values) => this.ping_service.ping({
                id: values.params.id,
            }))
            .then((result) => response
                .status(200)
                .json(result)
            );
    }
}

PingController.instance = null;

module.exports = {
    PingController,
};
