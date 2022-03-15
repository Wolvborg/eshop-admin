import { Request, Response } from 'express';

class UserController {
  /**
   * UserController
   */
  public static UserController(_req: Request, _res: Response): void {
    _res.send({ user: _req.params.id });
  }
}

export default UserController;
