import NodeCache from "node-cache";
export const captchaCache = new NodeCache( { stdTTL: 120 , checkperiod: 130 } );    // 120 sec or 2 minutes cache , delete every 130 seconds 
export const tokenCache = new NodeCache( { stdTTL: 120 , checkperiod: 130 } );    // 120 sec or 2 minutes cache , delete every 130 seconds 


export const otpCache = new NodeCache( { stdTTL: 120 , checkperiod: 130 } );        // 120 sec or 2 minutes cache , delete every 130 seconds 
export const sessionCache = new NodeCache( { stdTTL: 300 , checkperiod: 310 } ) ;   // 300 sec or 5 minutes cache , delete every 310 seconds 
export const ssoCodeCache = new NodeCache( { stdTTL: 300 , checkperiod: 310 } ) ;   // 300 sec or 5 minutes cache , delete every 310 seconds 
