import { Request, Response } from 'express';
import UserModel from '../models/UserModel';
import ResponseData from '../utils/responseData';

class UserController {
  /**
   * UserController
   */
  public static async UserController(_req: Request, _res: Response): Promise<void> {
    const User = new UserModel(_req.body);

    await User.save();

    const response = new ResponseData(201, null, null);

    _res.status(response.status).send(response);
  }
}

export default UserController;
