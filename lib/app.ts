import * as express from 'express';
import { throws } from 'assert';

class App {
  public app: express.Application;
  public port: number;

  constructor(appInit: { port: number; middleWares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;
    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
    this.assets();
  }

  // middlewares for check id or logging
  private middlewares(middleWares: {
    // parameter is foreach object
    // that takes first arg as a function
    // that takes middleware as a param and returns void
    foreach: (arg0: (middleware: any) => void) => void;
  }) {
    middleWares.foreach(middleWare => {
      this.app.use(middleWare);
    });
  }

  // contollers handling request and sending response
  private routes(controllers: {
    foreach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.foreach(controller => {
      this.app.use(controller);
    });
  }

  private assets() {
    // Static files like image and scripts files
    this.app.use(express.static('public'));
    // Static HTTP template
    this.app.use(express.static('views'));
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the ${this.port}`);
    });
  }
}

export default App;
