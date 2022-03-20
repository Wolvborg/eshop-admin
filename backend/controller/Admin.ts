import { Request, Response } from 'express';
import Debug from 'debug';
import UserModel from '../models/UserModel';
const debug = Debug('file:controller/Admin');

class UserController {
  /**
   * UserController
   */
  public static async UserController(_req: Request, _res: Response): Promise<void> {
    const User = new UserModel(_req.body);

    await User.save();

    _res.send({ data: 'Created' });
  }
}

export default UserController;
