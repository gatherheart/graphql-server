"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const NotFoundError_1 = __importDefault(require("../../exceptions/NotFoundError"));
// Default Home Directory Path Controller
class HomeController {
    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.index = (req, res) => {
            res.send('Hello World');
        };
        // Error Handler Test
        this.notFound = (req, res, next) => {
            next(new NotFoundError_1.default(res));
        };
        // Error Handler Test
        this.dbError = (req, res, next) => { };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.index);
        this.router.get('/notFound', this.notFound);
        this.router.get('/dbError', this.dbError);
        this.router;
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.controller.js.map