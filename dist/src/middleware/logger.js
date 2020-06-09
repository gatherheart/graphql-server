"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggerMiddleware = function (request, response, next) {
    console.log(`${request.hostname} ${request.method} ${request.path} ${request.body}`);
    next();
};
exports.default = loggerMiddleware;
//# sourceMappingURL=logger.js.map