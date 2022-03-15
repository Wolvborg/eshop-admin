import express, { Application } from 'express';
import Middleware from './middleware';
import ErrorHandlers from './errorHandlers';
import Routes from './routes';
import Locals from './locals';

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
    _expressApp = ErrorHandlers.init(_expressApp);
    return _expressApp;
  }

  private mountRoutes(_expressApp: Application): Application {
    _expressApp = Routes.init(_expressApp);

    return _expressApp;
  }

  private mountMiddlewares(_expressApp: Application): Application {
    _expressApp = Middleware.init(_expressApp);

    return _expressApp;
  }

  private setAppLocals(_expressApp: Application): Application {
    const config = Locals.getEnvVariables();

    _expressApp.locals = { ...config };

    return _expressApp;
  }

  public init(): void {
    const PORT: number | string = process.env.PORT || 3000;

    this.exppressInstance.listen(PORT);
  }
}

export default new Express();
