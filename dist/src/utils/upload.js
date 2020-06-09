"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const upload = multer_1.default({ dest: "uploads/" });
exports.uploadMiddleware = upload.single("file");
exports.uploadController = (req, res) => {
    const { file } = req;
    console.log(file);
    res.end();
};
//# sourceMappingURL=upload.js.map