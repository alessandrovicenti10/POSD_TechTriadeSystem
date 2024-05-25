'use strict';

const {entityService} = require("@strapi/strapi").factories
/**
 * A set of functions called "actions" for `prisma`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const data = await strapi.entityService.findMany("api::pattern.pattern", {
        fields: ["id", "name", "descrizione"],
      });
       //ctx.body = 'Hello world, goffry sta lavorando';
       return data
    } catch (err) {
       ctx.body = err;
    }
  }
};
