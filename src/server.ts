import App from './app';
import loggerMiddleware from './middleware/logger';
import validateEnv from './utils/validateEnv';
import schema from './schema';

validateEnv();

const PORT = process.env.PORT || 4000;

const app = new App(
  { schema },
  {
    port: parseInt(process.env.PORT) || 80,
    controllers: [],
    middleWares: [loggerMiddleware],
  },
);

app.listen();
