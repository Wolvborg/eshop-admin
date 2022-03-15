import { Request, Response } from 'express';
import path from 'path';

class HomeViewController {
  /**
   * HomeViewController
   */
  public static HomeViewController(_req: Request, _res: Response): void {
    _res.sendFile(path.join(__dirname, '../index.html'));
  }
}

export default HomeViewController;
