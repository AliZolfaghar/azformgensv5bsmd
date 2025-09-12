import config from './config.js';
import { join } from 'path';
const localdbPath = join(process.cwd(), '/localdb/localdb.db');


export default {

  localdb: {
    client: "better-sqlite3",
    connection: { filename: localdbPath },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations'
    }
  } , 


  development: {
    client: "better-sqlite3",
    connection: { filename: "./db/aisourcefusion.db" },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations'
    }
  } , 

  production: {
    client: 'mysql2',
    connection: {
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      charset: 'utf8mb4'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  } , 

  production_mssql: {
    client: 'mssql',
    connection: {
        host : config.DB_HOST ,
        user : config.DB_USER ,
        password : config.DB_PASSWORD ,
        database : config.DB_DATABASE ,
        requestTimeout  : 30000 ,
        onnectionTimeout: 180000 ,  // for timeout setting
        options: {
            "encrypt": false ,      // need to stop ssl checking in case of local db
            enableArithAbort : true , 
            trustServerCertificate: true
        }
    },
    pool: { min: 0 , max: 10 } , 
    migrations: { tableName: 'knex_migrations'}
  }
};

/*

knex migrate:make create_users_table
knex migrate:latest
knex migrate:rollback
knex migrate:latest --env production

*/