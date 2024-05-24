'use strict';

/**
 * feature-example service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feature-example.feature-example');
