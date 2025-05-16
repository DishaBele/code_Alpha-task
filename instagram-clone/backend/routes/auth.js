const express = require('express');
const router = express.Router();
const fs = require('fs');

const USERS_FILE = './users.json';

router.post('/login', (req, res) => {
  const { username } = req.body;
  let users = JSON.parse(fs.readFileSync(USERS_FILE));
  if (!users.includes(username)) {
    return res.status(401).json({ message: 'User not found' });
  }
  res.json({ message: 'Login successful', username });
});

router.post('/register', (req, res) => {
  const { username } = req.body;
  let users = JSON.parse(fs.readFileSync(USERS_FILE));
  if (users.includes(username)) {
    return res.status(409).json({ message: 'User already exists' });
  }
  users.push(username);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users));
  res.json({ message: 'User registered successfully', username });
});

module.exports = router;
