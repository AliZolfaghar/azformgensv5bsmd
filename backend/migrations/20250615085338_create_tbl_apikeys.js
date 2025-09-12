
export const up = function(knex) {

    return knex.schema.createTable('tbl_apikeys', function(table) {
        table.increments('id').primary(); 
        table.string('ownerGuid').notNullable();
        // table.foreign('ownerGuid').references('userGuid').inTable('tbl_users');
        table.string("apiKey").defaultTo(knex.fn.uuid());
      });

};


export const down = function(knex) {

    return knex.schema.dropTable('tbl_apikeys'); 

};
