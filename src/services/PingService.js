'use strict';

class PingService {

    /**
     *
     * Constructor.
     *
     * @param {Number} value
     */
    constructor(
        value
    ) {
        this.value = value;
    }

    /**
     *
     * Returns PingService singleton, after eventually having created it.
     *
     * @static
     *
     * @returns {PingService}
     */
    static getInstance() {
        if (PingService.instance === null) {
            PingService.instance = new PingService(
                Math.ceil(Math.random() * 100)
            );
        }

        return PingService.instance;
    }

    /**
     *
     * Simple service.
     *
     * @param {express.Request} input
     * @param {Number} input.id
     *
     * @returns {Promise<Object|Error>}
     */
    ping(input) {
        const {
            id,
        } = input;

        return new Promise((resolve) => resolve({
            id,
            my_value: Math.ceil(Math.random() * 100) + this.value,
        }));
    }
}

PingService.instance = null;

module.exports = {
    PingService,
};
