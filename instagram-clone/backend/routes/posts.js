const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
  res.json(posts);
});

router.post('/', (req, res) => {
  const { user, content } = req.body;
  const newPost = { user, content, createdAt: new Date() };
  posts.push(newPost);
  res.json({ message: 'Post created', post: newPost });
});

module.exports = router;
