'use strict';

/**
 * principi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::principi.principi', ({strapi})=> ({
    async findMany(ctx){
        try{
            const data = await strapi.entityService.findMany("api::principi.principi", {
                fields: ["id", "name", "descrizione"],
              });
            return data
            //ctx.body = "My custom controller"
        } catch (error){
            ctx.body = error;
        }
    }
}));
