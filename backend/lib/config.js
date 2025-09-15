export default {

    HTTP_PORT : 80 , // 88 
    DEV_URL   : "http://localhost:88" , 
    APP_MODE : 'dve' , 
    APP_URL : 'http://localhost' , 

    LOCALDB_FILENAME : process.env.LOCALDB_FILENAME ,

    DB_HOST     : "127.0.0.1", 
    DB_USER     : "aiuser",
    DB_PASSWORD : "Ali@1432",
    DB_NAME     : "aisourcefusion",
    DB_PORT     : 3306 , 


    JWT_SECRET       : "Jn:QDh[27m%W]?wtv/ubXB" ,   // sso access_token : access token generate and send to clients for /oauth2/authorize
    // USER_JWT_SECRET  : "Jn:QDh[27m%W]?wtv/ubXB1" ,   // user Token users logged-in to aisourcefusion via 
    // ADMIN_JWT_SECRET : "Jn:QDh[27m%W]?wtv/ubXB2" ,  // admin Token : amin of aisourcefusion    
    // SESSION_SECRET   : "Jn:QDh[27m%W]?wtv/ubXB3" ,  // admin Token : amin of aisourcefusion    

}

/*

   mariadb-dump -u aiuser -p Ali@1432 aisourcefusion > /home/ali/backup.sql
   mariadb-dump -u aiuser -p aisourcefusion > /home/ali/backup.sql

*/