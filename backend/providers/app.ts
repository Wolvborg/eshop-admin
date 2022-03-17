// import createError, { HttpError } from 'http-errors';
import Database from './database';
import Express from './express';

import * as dotenv from 'dotenv';

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
class App {
  public static loadConfigs(): void {
    dotenv.config();
  }

  public static loadDatabase(): void {
    Database.init();
  }

  public static loadServer(): void {
    Express.init();
  }
}

export default App;
