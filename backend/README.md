# aisourcefusion
Combining different sources of Image/Text/Prints/.... into a single entity 


database : 
start mysql portable for dev env 
bin\mysqld.exe --no-defaults --bind-address=127.0.0.1

dev database in mysql : 
CREATE DATABASE `aisourcefusion` CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';


CREATE USER 'aiuser'@'localhost' IDENTIFIED BY 'Ali@1432';
GRANT ALL PRIVILEGES ON aisourcefusion.* TO 'aiuser'@'localhost';
FLUSH PRIVILEGES;


configs are in config.js 
.env used only to identify the dev or production environment

knex migration commands used in this app :  
knex migrate:make migration_name 
knex migrate:latest --env production






