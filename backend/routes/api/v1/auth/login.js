import { Router } from 'express';
import bcrypt from 'bcrypt';
import config from '../../../../config.js';
import {localdb} from '../../../../db.js';
import jwt from 'jsonwebtoken';
import { captchaCache , tokenCache } from '#lib/appCache.js';
import { saveLoginLog } from '#lib/logger.js';
import { checkLogin } from '#lib/checkLogin.js';

// user fields in database is : 
let user = { id : 0	, firstName : '' , lastName : '' , displayName : '' , userName : '' , password : '' , email : '' , created_at : '' , updated_at : '' , isActive : false , isVerified : false } ; 

const router = Router();

router.get('/api/v1/auth/login' , checkLogin , async ( req , res ) => {
    res.json( { user: req.user } ); // return user info
});


// validate all rules for perform a login 
// user and  password is posted from login page and captcha is correct 
const validateLogin = async ( req , res , next ) => {
    return next() ; // TODO : disable validation for now

    const { email, password, captcha, captchaId } = req.body; // get email and password

    console.log('validate' , await bcrypt.hash('ali@1234',10))
    

    // if there is no email or password , return 400 error
    if (!email || !password) return res.status(400).json({ error: 'please enter email and password.' });
    
    // check captcha , if email is azolfaghar@gmail.com then we do not need to check captcha
    if ( email === 'azolfaghar@gmail.com' ) {
        // bypass captcha
    } else {
        
        if (!captcha) return res.status(400).json({ error: 'please enter captcha.' }); // if there is no captcha 

        // take captcha from cache , if email is azolfaghar@gmail.com then we do not need to check captcha
        const validCaptcha = captchaCache.take(captchaId); // take captcha from cache nd delete it from cache
        if ( !validCaptcha || validCaptcha.toString().toUpperCase() != captcha.toUpperCase()) 
            return res.status(400).json({ error: 'invalid captcha.' });
    }
    next() ; // validation pass : ok , continue to login 
}


// console.log(await bcrypt.hash('changeMe',10))

router.post('/api/v1/auth/login' , validateLogin , async ( req , res ) => {
    // get login items from req.body user name is a username or email 
    const { userName , password } = req.body; // get username and password
    console.log('username and pass :' , userName , password); 

    // get user from database
    const user = await localdb('fg_users').where('email', userName).orWhere('userName', userName).first(); // find user in database with email or username

    // handle user not found
    if (!user) return res.status(400).json({ error: 'username or password is not correct.' });    

    // console.log('user is :' , user)

    // compare posted password with valid password in database
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) return res.status(401).json({ error: 'username or password is not correct!' });

    // TODO : check email verify

    // prepare user to send along with token
    const payload = {
        id: user.id,
        displayName: user.displayName,
        // roles: user.roles,
        // permissions: user.permissions 
    };

    // create jwt and pass to client
    // this token must be sent in the Authorization header as Bearer <token>    
    const token = jwt.sign( payload , config.JWT_SECRET , { expiresIn: '24h' } ); // TODO : change 24h to 15m

    // save token in cache
    tokenCache.set(token, { userGuid: user.userGuid }, 24 * 60 * 60); // 24h

    
    // save log to database 
    // TODO : enable save login logs 
    // await saveLoginLog(user.id , req.ip , 'success')

    // send token to client
    res.json({ token , user : payload });

    // TODO : handle ChangeMe password
    // TODO : handle locked user
    // TODO : handle expired password ( old passwords need to change )

});

export default router;
