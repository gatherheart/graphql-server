"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const graphql_yoga_1 = require("graphql-yoga");
const express = __importStar(require("express"));
class App extends graphql_yoga_1.GraphQLServer {
    constructor(props, appInit) {
        super(props);
        this.app = this.express;
        this.port = appInit.port;
        this.setMiddlewares(appInit.middleWares);
        this.setRoutes(appInit.controllers);
        this.setAssets();
    }
    // middlewares for check id or logging
    setMiddlewares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    // contollers handling request and sending response
    setRoutes(controllers) {
        controllers.forEach(controller => {
            this.app.use(controller.router);
        });
    }
    setAssets() {
        // Static files like image and scripts files
        this.app.use(express.static('public'));
        // Static HTTP template
        this.app.use(express.static('views'));
    }
    listen() {
        this.start({ port: this.port }, () => console.log(`Server running on  http://localhost:${this.port}`));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map