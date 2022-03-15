import express, { Application } from 'express';
import path from 'path';

class Middleware {
  private static setPublicDirectory(_expressApp: Application): Application {
    _expressApp.use('/public', express.static(path.join(__dirname, '../public')));
    return _expressApp;
  }

  public static init(_expressApp: Application): Application {
    _expressApp = Middleware.setPublicDirectory(_expressApp);

    return _expressApp;
  }
}

export default Middleware;
