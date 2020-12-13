const expect = require('chai').expect
const index = require('../src/index')
const sinon = require('sinon')
const favoritesService = require('../src/favorites/favoritesService')

const EVENT_GET_FAVORITES = {
    requestContext: {
        routeKey: "GET /favorites"
    },
    queryStringParameters: {
        id: 'ryan'
    }
}

describe('index: When GET All Favorites event received', function() {
    describe('And request path is invalid', function() {
        it('Returns HTTP 404', async function() {
            const EVENT = {
                requestContext: {
                    routeKey: "GET /some/api"
                }
            }
            const resp = await index.handler(EVENT)
            expect(resp.statusCode).to.be.equal('404')
        })
    })
    describe('And user does not exist', function() {
        it('Returns HTTP 404', async function() {
            const favoritesServiceStub = sinon.stub(favoritesService, "getFavorites")
                .throws('errorName', 'user not found');
            const resp = await index.handler(EVENT_GET_FAVORITES)
            expect(resp.statusCode).to.be.equal('404')
            expect(JSON.parse(resp.body)).to.be.deep.equal({
                error: 'get favorites failed',
                errorDetail: 'user not found'
            });
            favoritesServiceStub.restore();
        })
    })
    describe('And user id is missing', function() {
        it('Returns HTTP 400')
    })
    describe('And favorites service throws an error', function() {
        it('Returns HTTP 500')
    })
    describe('And favorites service responds successfully', function() {
        it('Returns HTTP 200')
    })

})