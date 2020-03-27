import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';
import NotFoundException from '../../exceptions/NotFoundError';

class HomeController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
    this.router.get('/admin', this.adminPage);
  }

  private index = (req: Request, res: Response) => {
    res.send('Hello World');
  };

  private adminPage = (
    req: Request,
    res: Response,
    next: express.NextFunction,
  ) => {
    next(new NotFoundException(res));
  };
}

export default HomeController;
