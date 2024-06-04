'use strict';

/**
 * accreditation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::accreditation.accreditation');
