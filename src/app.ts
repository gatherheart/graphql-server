import { GraphQLServer } from 'graphql-yoga';
import * as express from 'express';

class App extends GraphQLServer {
  public app: express.Application;
  public port: number;

  constructor(
    props,
    appInit: { port: number; middleWares: any; controllers: any; },
  ) {
    super(props);
    this.app = this.express;
    this.port = appInit.port;

    this.setMiddlewares(appInit.middleWares);
    this.setRoutes(appInit.controllers);
    this.setAssets();
  }
  // middlewares for check id or logging
  private setMiddlewares(middleWares: {
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
  private setRoutes(controllers: {
    forEach: (arg0: (controller: any) => void) => void;
  }) {
    controllers.forEach(controller => {
      this.app.use(controller.router);
    });
  }

  private setAssets() {
    // Static files like image and scripts files
    this.app.use(express.static('public'));
    // Static HTTP template
    this.app.use(express.static('views'));
  }

  public listen() {
    this.start({ port: this.port }, () =>
      console.log(`Server running on  http://localhost:${this.port}`),
    );
  }
}

export default App;
