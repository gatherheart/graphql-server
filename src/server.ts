import App from './app';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import PostController from './controllers/posts/post.controller';
import HomeController from './controllers/home/home.controller';
import validateEnv from './utils/validateEnv';
import { GraphQLServer } from 'graphql-yoga';
import * as logger from 'morgan';

validateEnv();

const PORT = process.env.PORT || 4000;

const typeDefs = `
    type Query{
        hello: String!
    }
`;

const resolvers = {
  Query: {
    hello: () => 'Hi',
  },
};

const app = new App(
  { typeDefs, resolvers },
  {
    port: parseInt(process.env.PORT) || 80,
    controllers: [new PostController()],
    middleWares: [
      logger('dev'),
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
    ],
  },
);

app.listen();
