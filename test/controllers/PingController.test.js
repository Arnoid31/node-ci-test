'use strict';

const {
    expect,
} = require('chai');
const superTest = require('supertest');
const {
    v4,
} = require('uuid');

const {
    app,
} = require('./../../src/app');

describe('PingController', () => {
    it('Should correctly ping server', (done) => {
        const id = Math.ceil(Math.random() * 100);

        superTest(app)
            .get(`/ping/${id}`)
            .expect(200)
            .expect((response) => {
                expect(response.body).to.have.property('id', id);
                expect(response.body).to.have.property('my_value');
                expect(response.body.my_value).to.be.a('number');
            })
            .end(done);
    });
    it('Should throw error when id is not a number', (done) => {
        const id = v4();

        superTest(app)
            .get(`/ping/${id}`)
            .expect(500)
            .end(done);
    });
});
