import { Application } from 'express';
import Views from '../middleware/views';
import Http from '../middleware/http';
import Debug from 'debug';

const debug = Debug('file:providers/middleware');

class Middleware {
  public static init(_expressApp: Application): Application {
    debug('Mounting Views Middleware');
    _expressApp = Views.mount(_expressApp);

    debug('Mounting Https Middleware');
    _expressApp = Http.mount(_expressApp);

    return _expressApp;
  }
}

export default Middleware;
