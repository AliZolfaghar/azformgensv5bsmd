// create knex migration file to create fg_users table
// with the following columns:
// id	first_name	last_name	display_name	user_name	password	email	created_at	updated_at
// is_active	is_verified

export async function up(knex) {
    await knex.schema
        .createTable('fg_users', (table) => {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('display_name').notNullable();
            table.string('user_name').notNullable().unique();
            table.string('password_hash').notNullable();
            table.string('email').notNullable().unique();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.boolean('is_active').defaultTo(true);
            table.boolean('is_admin').defaultTo(false);
            table.boolean('is_verified').defaultTo(false);
        })
        .then(() => {
            // create a default admin user for first time
            const user = {
                first_name: 'Ali',
                last_name: 'Zolfaghar',
                display_name: 'Ali Zolfaghar',
                user_name: 'azr',
                password_hash:
                    '$2b$10$nd1FuA203qpAV1Qb9JzETOlHFw5mDVwzbf6GbXLm4UQe43eAH4xza',
                email: 'azolfaghar@gmail.com',
                is_active: 1,
                is_admin: 1,
                is_verified: 1
            };
            // insert into database 
            return knex('fg_users').insert(user);
        });
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('fg_users');
}
