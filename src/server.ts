import App from './app';

import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import PostController from './controllers/posts/post.controller';
import HomeController from './controllers/home/home.controller';
import validateEnv from './utils/validateEnv';
import { GraphQLServer } from 'graphql-yoga';

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

const app = new App({
  port: parseInt(process.env.PORT) || 80,
  controllers: [new HomeController(), new PostController()],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    loggerMiddleware,
  ],
});

//app.listen();

const server = new GraphQLServer({ typeDefs, resolvers });

server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`),
);
