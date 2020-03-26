import { Request, Response } from 'express';

const loggerMiddleware = function(request: Request, response: Response, next) {
  console.log(
    `${request.hostname} ${request.method} ${request.path} ${request.body}`,
  );
  next();
};

export default loggerMiddleware;
