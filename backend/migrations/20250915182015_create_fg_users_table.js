// create knex migration file to create fg_users table
// with the following columns:
// id	first_name	last_name	display_name	user_name	password	email	created_at	updated_at
// is_active	is_verified

export async function up(knex) {
    await knex.schema
        .createTable('fg_users', (table) => {
            table.increments('id').primary();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
            table.string('displayName').notNullable();
            table.string('userName').notNullable().unique();
            table.string('password').notNullable();
            table.string('email').notNullable().unique();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.boolean('isActive').defaultTo(true);
            table.boolean('isAdmin').defaultTo(false);
            table.boolean('isVerified').defaultTo(false);
        })
        .then(() => {
            // create a default admin user for first time
            const user = {
                firstName: 'Ali',
                lastName: 'Zolfaghar',
                displayName: 'Ali Zolfaghar',
                userName: 'azr',
                password:
                    '$2b$10$nd1FuA203qpAV1Qb9JzETOlHFw5mDVwzbf6GbXLm4UQe43eAH4xza',
                email: 'azolfaghar@gmail.com',
                isActive: 1,
                isAdmin: 1,
                isVerified: 1
            };
            // insert into database 
            return knex('fg_users').insert(user);
        });
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('fg_users');
}
