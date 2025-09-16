// create knex migration file to create i18n table

export async function up(knex) {
    await knex.schema
        .createTable('i18n', (table) => {
            table.increments('id').primary();
            table.string('lang').notNullable();
            table.string('word').notNullable();
            table.string('translation').notNullable();
        })
        .then(() => {
            // create a default admin user for first time

            // insert into database 
            return knex('i18n').insert(baseData);
        }
    );
}

export async function down(knex) {
    await knex.schema.dropTableIfExists('i18n');
}



const baseData = [
  { "lang": "en", "word": "welcome", "translation": "Welcome" },
  { "lang": "en", "word": "login", "translation": "Login" },
  { "lang": "en", "word": "logout", "translation": "Logout" },

  { "lang": "fa", "word": "welcome", "translation": "خوش آمدید" },
  { "lang": "fa", "word": "login", "translation": "ورود" },
  { "lang": "fa", "word": "logout", "translation": "خروج" },

  { "lang": "fr", "word": "welcome", "translation": "Bienvenue" },
  { "lang": "fr", "word": "login", "translation": "Connexion" },
  { "lang": "fr", "word": "logout", "translation": "Déconnexion" }
]
