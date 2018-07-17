'use strict';

const {
    expect,
} = require('chai');

const {
    PingService,
} = require('./../../src/services');

describe('PingService', () => {
    it('Should add my_value to input and return it', (done) => {
        const id = Math.ceil(Math.random() * 100);

        PingService
            .getInstance()
            .ping({
                id,
            })
            .then((result) => {
                expect(result).to.have.property('id', id);
                expect(result).to.have.property('my_value');
                expect(result.my_value).to.be.a('number');

                done();
            })
            .catch(done);
    });
});
