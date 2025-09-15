import { Router } from 'express';
import bcrypt from 'bcrypt';
// import config from '../../../../config.js';
// import db from '../../../../db.js';
// import jwt from 'jsonwebtoken';
// import { captchaCache , tokenCache } from '#lib/appCache.js';
import { checkLogin } from '#lib/checkLogin.js';

const router = Router();

router.get('/api/v1/auth/logout', checkLogin ,  async (req, res) => {
    console.log(req.user)
    // clear token from cache
    // tokenCache.del(req.user.userGuid);
    // req.user = null;
    // console.log('/api/v1/auth/logout');
    res.json({ message: 'success' });
});


export default router;
