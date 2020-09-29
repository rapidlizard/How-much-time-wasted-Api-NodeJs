import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import pino from 'pino';
import pinoHttp from 'pino-http';

import index from './routes/index';

const logger = pino();
const loggerMiddleware = pinoHttp({ logger });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.use((req, res) => {
  res.status(404);
  res.json({ error: 'not-found' });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err);
  res.status(err.status || 500);
  res.json({ error: 'unexpected' });
});

export default app;
