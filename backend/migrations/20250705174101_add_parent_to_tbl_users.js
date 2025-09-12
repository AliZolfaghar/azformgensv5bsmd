
export const up = function(knex) {
    // add parent_guid to tbl_users
    return knex.schema.table('tbl_users', function(table) {
        table.string('parent_guid').nullable();
    });
};

export const down = function(knex) {
    return knex.schema.table('tbl_users', function(table) {
        table.dropColumn('parent_guid');
    });
};

