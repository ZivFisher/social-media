import express from 'express';
import { getPostsByUserId, getAllPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const postsRouter = express.Router();

/* READ */
postsRouter.get('/', verifyToken, getAllPosts);
postsRouter.get('/:userId/posts', verifyToken, getPostsByUserId);

/* UPDATE */
postsRouter.patch('/:id/like', verifyToken, likePost);

export default postsRouter;