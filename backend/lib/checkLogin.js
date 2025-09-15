import jwt from 'jsonwebtoken';
import config from './config.js';
import db from './db.js';

// fail messages 
const failMessage = {
    type : 'danger',
    title : 'Authentication Failed (check login)',
    message : "Please Login First",
    link_url : "/login",
    link_caption : "Login"
}

// verify authorization token 
export const checkLogin = async ( req , res , next ) => {    
    // get authorization token from header
    const loginToken = req.headers['authorization']?.split(' ')[1];
    
    // if not return not authorized status code = 401
    if (!loginToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // verify authorization token
    try {
        let payload = jwt.verify( loginToken , config.JWT_SECRET )
        // convert payload.roles and permissions to array 
        payload.roles = payload.roles ? payload.roles.split(',') : [];
        payload.permissions = payload.permissions ? payload.permissions.split(',') : [];
        
        // if token is valid , put user in req.user
        req.user = payload

        next(); // pass control to the next middleware

    } catch (error) { // if token is not valid
        console.log('check login # 39', error.message);
        return res.status(401).json({ error: 'Unauthorized' });
    }
}

// TODO: check user is active 
