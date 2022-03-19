import { Request, Response } from 'express';
import Debug from 'debug';
const debug = Debug('file:controller/Admin');

class UserController {
  /**
   * UserController
   */
  public static UserController(_req: Request, _res: Response): void {
    debug(_req.body);
    _res.send(_req.body);
  }
}

export default UserController;
