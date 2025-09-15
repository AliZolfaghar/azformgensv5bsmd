import knex from 'knex';
import config from '../knexfile.js';
import { attachPaginate } from 'knex-paginate';


const APP_DB = process.env.APP_DB || 'sqlite123';
console.log("APP DATABSE IS :" , APP_DB);

const db = knex(config[APP_DB]);
attachPaginate();
export default db;

// const localdb = knex(config['localdb']);
// export { localdb };