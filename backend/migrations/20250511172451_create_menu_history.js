
export const up = function(knex) {

    return knex.schema.createTable('tbl_menu_history', function(table) {
        table.increments('id'); 
        table.string('branch').notNullable(); 
        table.string('json').notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });

};


export const down = function(knex) {

    return knex.schema.dropTable('tbl_menu_history'); 

};
