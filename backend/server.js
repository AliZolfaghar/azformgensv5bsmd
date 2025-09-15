import config from '#lib/config.js';
import express from 'express';
import { readdir } from 'fs/promises';
import path from 'path';
import azdate from 'azdate';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

console.log(`
#########################
#     AZ-FG-BACKEND     #
#########################
`);

const app = express();

// setup cors for dev server
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));

// alow large data for print pdf files as base64
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(express.json({ limit: '5mb' }));

// setup express static
app.use(express.static('../frontend/dist')); // server files in /www as static html files

// log all route requests to console
app.use((req, res, next) => {
    if (req.path != '/api/gitpull') {
        // do not show path of /api/gitpull
        console.log(
            `${azdate.get_current_persian_datetime()} , ${req.ip} , ${
                req.method
            } , ${req.url}`
        );
    }
    next();
});

// AUTOMATIC ROUTE LOAD
const loadApiRoutesAndStart = async () => {
    const routesPath = path.resolve('routes');
    const routeFiles = await readdir(routesPath, { recursive: true });

    for (const file of routeFiles) {
        // for each file in /routes
        if (file.endsWith('.js')) {
            // if file is a js file
            const routerFile = './routes/' + file.replaceAll('\\', '/'); // build path
            console.log(`Register Router File : ${routerFile}`); // log a message
            const { default: route } = await import(routerFile); // import route
            app.use(route); // use route
        }
    }

    // handle express errors
    app.use((err, req, res, next) => {
        console.error(err.stack);

        let message = err.message;
        console.log(message);

        if (message.includes('Duplicate entry')) {
            message = 'Duplicate entry';
        }

        res.status(500).send({ message });
    });

    // handle express notfound 
    app.use( ( req , res ) => {
        console.log('# 404' , req.path);
        return res.status(404).json({ message : `route not found : ${req.path}` });
    });

    // listen to requests via express-app
    app.listen(config.HTTP_PORT, () => {
        console.log(
            `express listen on port : ${config.HTTP_PORT} , env : ${process.env.NODE_ENV}`
        );
    });
};

// load api routes dynamically and start server
loadApiRoutesAndStart();
