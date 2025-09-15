
export const up = function(knex) {

    return knex.schema.createTable('tbl_menu', function(table) {
        table.increments('id'); 
        table.string('company').notNullable();
        table.string('name').notNullable();
        table.decimal('price', 10, 2).notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now()); 
      });

};


export const down = function(knex) {

    return knex.schema.dropTable('tbl_menu'); 

};
