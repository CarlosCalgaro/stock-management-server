
import express, {Express, NextFunction, Request, Response} from 'express';
import logger from 'morgan';
import createError from 'http-errors';
import dotenv from 'dotenv';
import router from './routes'
import './db/connection';

dotenv.config();

const app : Express = express();
const port = process.env.PORT;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/', router);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json();
});