
export const up = function(knex) {

    return knex.schema.createTable('tbl_files', function(table) {
        table.increments('id').primary(); 
        table.string('apikey').notNullable();

        table.string('filename').notNullable(); 
        table.string('mimetype').notNullable(); 
        table.string('filesize').notNullable(); 
        table.text('base64' , 'longtext').notNullable(); 
        table.string('uuid').notNullable(); 
        table.string('aifilename').notNullable(); 
        table.text('json','longtext').nullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('total_tokens').nullable();
        table.text('ai_response','longtext').nullable(); 
      });

};


export const down = function(knex) {

    return knex.schema.dropTable('tbl_files'); 

};
