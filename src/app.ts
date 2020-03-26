import * as express from 'express';
import * as bodyParser from 'body-parser';

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next,
) {
  console.log(
    `${request.hostname} ${request.method} ${request.path} ${request.body}`,
  );
  next();
}

const app: express.Application = express();

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.get('/', (req: express.Request, res: express.Response, next) => {
  res.send('Hello World');
});

app.listen(80, () => console.log('Server Running'));
