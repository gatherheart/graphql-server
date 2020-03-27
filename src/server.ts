import App from './app';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import PostController from './controllers/posts/post.controller';
import HomeController from './controllers/home/home.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App({
  port: parseInt(process.env.PORT) || 80,
  controllers: [new HomeController(), new PostController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
