import express, { Application } from 'express';
import Middleware from './middleware';
import ErrorHandlers from './errorHandlers';
import Routes from './routes';
import Locals from './locals';
import Debug from 'debug';

const debug = Debug('file:providers/express');

class Express {
  private exppressInstance: Application;

  constructor() {
    this.exppressInstance = express();

    this.exppressInstance = this.setAppLocals(this.exppressInstance);
    this.exppressInstance = this.mountMiddlewares(this.exppressInstance);
    this.exppressInstance = this.mountRoutes(this.exppressInstance);
    this.exppressInstance = this.mountErrorHandlers(this.exppressInstance);
  }

  private mountErrorHandlers(_expressApp: Application): Application {
    debug('Mounting ErrorHandlers');
    return ErrorHandlers.init(_expressApp);
  }

  private mountRoutes(_expressApp: Application): Application {
    debug('Mounting Routes');

    return Routes.init(_expressApp);
  }

  private mountMiddlewares(_expressApp: Application): Application {
    debug('Mounting Middleware');

    return Middleware.init(_expressApp);
  }

  private setAppLocals(_expressApp: Application): Application {
    debug('Setting Express Locals');

    const config = Locals.getEnvVariables();

    _expressApp.locals = { ...config };

    return _expressApp;
  }

  public init(): void {
    const PORT: number | string = process.env.PORT || 3000;

    this.exppressInstance.listen(PORT, () => {
      debug(`Server Listing on ${PORT}`);
    });
  }
}

export default new Express();
