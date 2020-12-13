require('dotenv').config()
const { log } = require('./util/logger.js')
const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()
const favoritesService = require('./favorites/favoritesService')

exports.handler = async (event, context) => {
    await log('Received event: ' + JSON.stringify(event, null, 2))

    let body
    let statusCode = '200'
    const headers = {
        'Content-Type': 'application/json',
    }

    if (event.requestContext.routeKey == 'GET /favorites') {
        const userId = event.queryStringParameters.id
        try {
            const favoritesResp = await favoritesService.getFavorites(docClient, userId)
            // if (favoritesResp == undefined) {
            //     statusCode = '404'
            //     body = {
            //         error: 'get wallet failed',
            //         errorDetail: 'wallet does not exist'
            //     }
            // } else {
            //     body = walletResp
            // }
        } catch (err) {
            if (err.message == 'user not found') {
                statusCode = '404'
            } else {
                statusCode = '500'
            }
            body = {
                error: 'get favorites failed',
                errorDetail: err.message
            }
        }
    } else {
        statusCode = '404'
    }

    body = JSON.stringify(body)
    return {
        statusCode,
        body,
        headers,
    }
}