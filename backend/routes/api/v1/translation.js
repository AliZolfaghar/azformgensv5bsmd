import { Router } from 'express';
const router = Router();
import db from '#lib/db.js';

router.get( '/api/v1/translation{/:lang}' , async ( req , res ) => {
    let lang = req.params.lang ? req.params.lang : 'en'
    try {
        let translation = {} 
        const data = await db('i18n').where('lang' , lang)
        data.map( i=> {
            console.log(i.word.toLowerCase())
            translation[i.word.toLowerCase()] = i.translation
        })
        res.json(translation)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error : error.message})
    }
});

export default router;