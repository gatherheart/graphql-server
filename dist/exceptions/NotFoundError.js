"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("./HttpException"));
class NotFoundException extends HttpException_1.default {
    constructor(res) {
        super(404, 'Not Found Error 404');
        res.status(404).send('Not Found Error 404');
    }
}
exports.default = NotFoundException;
//# sourceMappingURL=NotFoundError.js.map