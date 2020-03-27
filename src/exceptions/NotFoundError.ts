import HttpException from './HttpException';
import { Response } from 'express';

class NotFoundException extends HttpException {
  constructor(res: Response) {
    super(404, 'Not Found Error 404');
    res.status(404).send('Not Found Error 404');
  }
}

export default NotFoundException;
