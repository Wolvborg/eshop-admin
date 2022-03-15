import { Application } from 'express';
import IndexRoutes from '../routes/index';
import AdminRoutes from '../routes/admin';

class Routes {
  public static init(_expressApp: Application): Application {
    const apiPrefix: string = _expressApp.locals.API_PREFIX || 'api';

    _expressApp.use(`/${apiPrefix}`, AdminRoutes);

    _expressApp.use('/', IndexRoutes);

    // _expressApp.use('/', Routes.index.get('*', Controller.HomeViewController));

    // _expressApp.use('/', Routes.admin.get('*', Controller.HomeViewController));
    return _expressApp;
  }
}

export default Routes;
