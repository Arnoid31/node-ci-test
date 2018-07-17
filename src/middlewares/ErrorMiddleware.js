'use strict';

class ErrorMiddleware {

    /**
     *
     * Handles error from controllers.
     *
     * @static
     *
     * @param {Error} error
     * @param {express.Request} request
     * @param {express.Request} response
     *
     * @returns {*}
     */
    static handleError(error, request, response) {
        return response
            .status(500)
            .json({
                error: error.message,
            });
    }
}

module.exports = {
    ErrorMiddleware,
};
