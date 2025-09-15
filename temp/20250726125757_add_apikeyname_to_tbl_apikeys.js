// use knex to add a column to tbl_apikeys table , this file is esmodule
export const up = function(knex) {
    return knex.schema.table('tbl_apikeys', function(table) {
        table.string('name').notNullable().defaultTo('');
    });
};

export const down = function(knex) {
    return knex.schema.table('tbl_apikeys', function(table) {
        table.dropColumn('name');
    });
};
