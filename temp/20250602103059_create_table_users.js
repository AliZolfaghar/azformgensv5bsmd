
export const up = function(knex) {

    return knex.schema.createTable('tbl_users', function(table) {
        table.increments('id').primary();
        table.string("userGuid").defaultTo(knex.fn.uuid());
        table.string('displayName').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('passwordResetToken');
        table.boolean('verified').defaultTo(false);
        table.string('roles').nullable().defaultTo('');
        table.text('permissions' , 'longtext').nullable().defaultTo('');
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Auto-fill upon insertion
        table.timestamp('updated_at');
      })
      .then( async () => {
        // Add a trigger for updating `updated_at`
        await knex.schema.raw(`
            CREATE TRIGGER before_update_tbl_users
            BEFORE UPDATE ON tbl_users
            FOR EACH ROW
            SET NEW.updated_at = NOW();
        `);
    })
    .then( async () => {
        // insert default data 
        await knex('tbl_users').insert({ displayName : 'Admin' , email : 'azolfaghar@gmail.com' , password : 'ChangeMe' , role : 'admin'});
    })
}


export const down = function(knex) {

    return knex.schema.dropTable('tbl_users')
    .then( async => {
        knex.schema.raw(' drop trigger before_update_tbl_users ')
    });    
};
