import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../../interfaces/IControllerBase.interface';
import NotFoundException from '../../exceptions/NotFoundError';
import errorHandler from '../../utils/dbErrorHandler';

// Default Home Directory Path Controller
class HomeController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
    this.router.get('/notFound', this.notFound);
    this.router.get('/dbError', this.dbError);

    this.router;
  }

  private index = (req: Request, res: Response) => {
    res.send('Hello World');
  };

  // Error Handler Test
  private notFound = (
    req: Request,
    res: Response,
    next: express.NextFunction,
  ) => {
    next(new NotFoundException(res));
  };

  // Error Handler Test
  private dbError = (
    req: Request,
    res: Response,
    next: express.NextFunction,
  ) => {};
}

export default HomeController;
