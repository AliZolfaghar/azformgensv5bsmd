import knex from 'knex';
import config from './knexfile.js';
import { attachPaginate } from 'knex-paginate';

const environment = process.env.NODE_ENV || 'production';
//console.log('app env :' , environment)
console.log("use db : " , environment);
const db = knex(config[environment]);
attachPaginate();
export default db;

const localdb = knex(config['localdb']);
export { localdb };