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
const post_model_1 = __importDefault(require("../../models/posts/post.model"));
const dbErrorHandler_1 = __importDefault(require("../../utils/dbErrorHandler"));
// Post Contents Contoller
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express.Router();
        this.posts = [];
        this.getAllPosts = (req, res) => {
            res.send({ status: 'On' });
        };
        this.createAPost = (req, res) => {
            const postData = req.body;
            const createdPost = new post_model_1.default(postData);
            createdPost
                .save()
                .then((savedPost) => {
                res.send(savedPost);
            })
                .catch((err) => res.status(400).json({ error: dbErrorHandler_1.default.getErrorMessage(err) }));
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PostsController;
//# sourceMappingURL=post.controller.js.map