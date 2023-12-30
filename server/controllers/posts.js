import Post from '../models/Post.js';
import User from '../models/User.js';

/* CREATE */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            userPicturePath: user.picturePath,
            description,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();
        const allPosts = await Post.find();
        return res.status(201).json(allPosts);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
}

/* READ */
export const getPostsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find({ userId });
        return res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        return res.status(200).json({ posts });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}

/* UPDATE */
export const likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body;
        const { likes } = await Post.findById(postId);
        const isLiked = likes.get(userId);

        if (isLiked) likes.delete(userId)
        else likes.set(userId, true);

        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { likes },
            { new: true }
        )

        res.status(200).json(updatedPost);
    } catch (err) {
        updatedPost
        res.status(404).json({ msg: err.message });
    }
}