"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./middleware/logger"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const schema_1 = __importDefault(require("./schema"));
validateEnv_1.default();
const PORT = process.env.PORT || 4000;
const app = new app_1.default({ schema: schema_1.default }, {
    port: parseInt(process.env.PORT) || 80,
    controllers: [],
    middleWares: [logger_1.default],
});
app.listen();
//# sourceMappingURL=server.js.map