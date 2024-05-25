'use strict';

/**
 * blog-post-example service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-post-example.blog-post-example');
