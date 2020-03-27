import * as express from 'express';
import * as mongoose from 'mongoose';
import 'dotenv/config';
import { throws } from 'assert';

class App {
  public app: express.Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;
    this.connectToTheDatabase();
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
  }

  // middlewares for check id or logging
  private middlewares(middleWares: {
    // parameter is foreach object
    // that takes first arg as a function
    // that takes middleware as a param and returns void
    forEach: (arg0: (middleWare: any) => void) => void;
  }) {
    middleWares.forEach(middleWare => {
      this.app.use(middleWare);
    });
  }

  // contollers handling request and sending response
  private routes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach(controller => {
      this.app.use(controller.router);
    });
  }

  private assets() {
    // Static files like image and scripts files
    this.app.use(express.static('public'));
    // Static HTTP template
    this.app.use(express.static('views'));
  }

  private connectToTheDatabase() {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;

    mongoose
      .connect(`mongodb://${MONGO_PATH}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log(`${MONGO_PATH} MongoDB Connected`))
      .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
      });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the ${this.port}`);
    });
  }
}

export default App;
