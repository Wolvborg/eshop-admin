// import createError, { HttpError } from 'http-errors';
// import express, { NextFunction, Application, Response, Request } from 'express';
// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';
// import Debug from 'debug';
import Database from './database';
import Express from './express';

import * as dotenv from 'dotenv';

// // Routes
// import indexRouter from '../routes/index';

// const debug = Debug('file:app.js');

// const app: Application = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use('/', indexRouter);

// // catch 404 and forward to error handler
// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(createError(404));
// });

// // error handler
// app.use((err: HttpError, req: Request, res: Response) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   debug('Passing through Error Handler');

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

class App {
  public static loadConfigs(): void {
    dotenv.config();
  }

  public static loadDatabase(): void {
    Database.init();
  }

  public static loadServer(): void {
    Express.init();
    // const PORT = this.expressInstance.locals.port;
    // this.expressInstance.listen(PORT);
  }
}

export default App;
