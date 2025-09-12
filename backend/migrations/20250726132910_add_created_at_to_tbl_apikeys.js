
export const up = async function (knex) {
  await knex.schema.alterTable('tbl_apikeys', (table) => {
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

export const down = async function (knex) {
  await knex.schema.alterTable('tbl_apikeys', (table) => {
    table.dropColumn('created_at');
  });
};
