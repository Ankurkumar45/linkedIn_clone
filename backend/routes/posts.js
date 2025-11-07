const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Post = require('../models/Post');
const User = require('../models/User');

// POST /api/posts/ -> create post
router.post('/', auth, async (req, res) => {
    try {
        const { text } = req.body;
        const post = new Post({ user: req.user.id, text });
        await post.save();
        const populated = await Post.findById(post._id).populate('user', 'name');
        res.json(populated);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// GET /api/posts/ -> all posts sorted desc
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'name').sort({ createdAt: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

module.exports = router;