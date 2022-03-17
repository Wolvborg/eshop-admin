import { Application } from 'express';
import IndexRoutes from '../routes/index';
import AdminRoutes from '../routes/admin';
import Debug from 'debug';

const debug = Debug('file:providers/routes');

class Routes {
  public static init(_expressApp: Application): Application {
    const apiPrefix: string = _expressApp.locals.API_PREFIX || 'api';

    debug('Setting Admin Routes');

    _expressApp.use(`/${apiPrefix}`, AdminRoutes);

    debug('Setting Index Routes');

    _expressApp.use('/', IndexRoutes);

    return _expressApp;
  }
}

export default Routes;
