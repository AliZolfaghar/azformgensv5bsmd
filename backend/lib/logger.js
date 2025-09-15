// save logs to database 
import db from './db.js' ;

/**
 * Save a login log to the database
 * @param {Object} params
 * @param {number} params.user_id
 * @param {string} params.ip_address
 * @param {string} [params.login_detail]
 * @returns {Promise<number>} Inserted log ID
 */
export async function saveLoginLog( user_id, ip_address, login_detail) {
    
    console.log(user_id , ip_address , login_detail)

    const [id] = await db('tbl_login_logs').insert({
        user_id ,    
        ip_address ,
        login_detail
    });
    return id;
}