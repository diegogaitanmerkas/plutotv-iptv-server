import express, { Request, Response } from 'express';
import cors from 'cors'
import { router } from './routes';

const app_port = process.env.PORT || 3000;

const app = express();
// CORS
app.use(cors())

app.use(router);

app.listen(app_port, () => {
    console.log(`PlutoTV server is running at port ${app_port}`);
})