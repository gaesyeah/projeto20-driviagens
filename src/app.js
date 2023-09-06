import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
//necessário para o middleware de erros funcionar
import "express-async-errors";
//-------------------------------------------------------
//não é necessário após o pg ser usado pelo menos uma vez
import './database/database.connection.js';
//-------------------------------------------------------
import indexRouter from './routes/index.routes.js';

const app = express();
app.use(express.json(), cors(), indexRouter);

dotenv.config();
const { PORT } = process.env;

const port = PORT || 5000;
app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));