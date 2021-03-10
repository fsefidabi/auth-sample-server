'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  getServices: async ctx => {
    const online = await strapi.services.online.find();
    console.log(online)
    return online ? online : [];
  },
};
