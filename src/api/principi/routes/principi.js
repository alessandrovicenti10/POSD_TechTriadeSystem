'use strict';

const middlewares = require('../../../../config/middlewares');

/**
 * principi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::principi.principi');

module.exports = {
    routes: [
        {
            method: 'GET',
            path: "/principis",
            handler: "principi.findMany",
            config: {
                policies: [],
                middlewares: [],
            }
        }
    ]
}
