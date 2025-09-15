
export const up = function(knex) {
    // add apiKeyName to tbl_apikeys
    return knex.schema.table('tbl_apikeys', function(table) {
        table.string('apiKeyName').nullable();
    });
};

export const down = function(knex) {
    return knex.schema.table('tbl_apikeys', function(table) {
        table.dropColumn('apiKeyName');
    });
};

