import { Router } from 'express';
import { captchaCache } from '../../../lib/appCache.js';
import { nanoid } from 'nanoid';
import svgCaptcha from 'svg-captcha';

const router = Router();

router.get( '/api/v1/captcha' , async (req,res) => {    
    let captcha = svgCaptcha.create( { size: 5 , ignoreChars: '0oOiIlL' , noise: 3 } ); // generate captcha     
    let captchaId = nanoid(); // creata a nano id for captcha key 
    captchaCache.set(captchaId , captcha.text); // store captcha in cache     
    res.json({ success : true , captchaId , captchaImage : captcha.data }); // return captchaId and captcha-base64
});

export default router;
// delete from captchaCache
