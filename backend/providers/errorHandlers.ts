import { Application } from 'express';

class ErrorHandlers {
  public static init(_expressApp: Application): Application {
    return _expressApp;
  }
}

export default ErrorHandlers;
