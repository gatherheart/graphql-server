import * as express from 'express';
import Post from '../../models/posts/post.interface';

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
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    res.send(this.posts);
  };

  createAPost = (request: express.Request, response: express.Response) => {
    const post: Post = request.body;
    this.posts.push(post);
    response.send(post);
  };
}

export default PostsController;
