export const up = function(knex) {

    return knex.schema.createTable('tbl_serviceOwners', function(table) {
        table.increments('id').primary();
        table.string("soGuid").defaultTo(knex.fn.uuid()); // service owner guid 
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        
        table.boolean('verified').defaultTo(false);

        table.timestamp('created_at').defaultTo(knex.fn.now()); // Auto-fill upon insertion
        table.timestamp('updated_at');
      })
      .then( async () => {
        // Add a trigger for updating `updated_at`
        await knex.schema.raw(`
            CREATE TRIGGER before_update_tbl_serviceOwners
            BEFORE UPDATE ON tbl_serviceOwners
            FOR EACH ROW
            SET NEW.updated_at = NOW();
        `);
    })
    .then( async () => {
        // insert default data 
        await knex('tbl_serviceOwners').insert({ name : 'Ali Zolfaghar' , email : 'azolfaghar@gmail.com' , password : 'ChangeMe'});
    })
}


export const down = function(knex) {

    return knex.schema.dropTable('tbl_serviceOwners'); 

};
