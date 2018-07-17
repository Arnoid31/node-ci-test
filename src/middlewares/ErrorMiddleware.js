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
     * @param {Function} next
     *
     * @returns {*}
     */
    static handleError(error, request, response, next) {
        response
            .status(500)
            .json({
                error: error.message,
            });
        return next();
    }
}

module.exports = {
    ErrorMiddleware,
};
