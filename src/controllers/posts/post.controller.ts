import * as express from 'express';
import Post from '../../models/posts/post.interface';
import postModel from '../../models/posts/post.model';
import * as mongoose from 'mongoose';
import dbErrorHandler from '../../utils/dbErrorHandler';

// Post Contents Contoller
class PostsController {
  public path = '/posts';
  public router = express.Router();

  private posts: Post[] = [];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.post(this.path, this.createAPost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    res.send({ status: 'On' });
  };

  createAPost = (req: express.Request, res: express.Response) => {
    const postData: Post = req.body;
    const createdPost: mongoose.Model<Post & mongoose.Document> = new postModel(
      postData,
    );
    createdPost
      .save()
      .then((savedPost) => {
        res.send(savedPost);
      })
      .catch((err) =>
        res.status(400).json({ error: dbErrorHandler.getErrorMessage(err) }),
      );
  };
}

export default PostsController;
