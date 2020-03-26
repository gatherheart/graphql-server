import App from './app';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import PostController from './controllers/posts/posts.controller';
import HomeController from './controllers/home/home.controller';

const app = new App({
  port: 80,
  controllers: [new HomeController(), new PostController()],
  middleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

app.listen();
