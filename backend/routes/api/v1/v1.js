import { Router } from 'express';
const router = Router();
import db from '#lib/db.js';

router.all( '/api/v1/' , async ( req , res ) => {
    res.json({ success : true , version : 1 , ip : req.ip , method : req.method })
});

export default router;