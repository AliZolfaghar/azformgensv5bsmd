
export const up = function(knex) {    
    return knex.schema.createTable('tbl_login_logs', function(table) {
        table.increments('id').primary(); 
        table.integer('user_id').nullable();        
        table.string('ip_address').nullable();        
        table.text('login_detail');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });

};


export const down = function(knex) {

    return knex.schema.dropTable('tbl_login_logs'); 

};
