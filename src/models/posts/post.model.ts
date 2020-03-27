import * as mongoose from 'mongoose';
import Post from './post.interface';

const postSchema = new mongoose.Schema({
  author: String,
  content: String,
  title: String,
});

const postModel = mongoose.Model<Post & mongoose.Document>('Post', postSchema);

export default postModel;
