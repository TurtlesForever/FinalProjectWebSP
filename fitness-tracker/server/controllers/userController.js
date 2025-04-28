const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = process.env.JWT_SECRET;

async function register(req, res) {
  const { username, password } = req.body;
  try {
    const userExists = await userModel.findUserByUsername(username);
    if (userExists) return res.status(400).json({ message: 'Username already exists' });

    const newUser = await userModel.createUser(username, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await userModel.findUserByUsername(username);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function profile(req, res) {
  const user = await userModel.findUserById(req.userId);
  res.json(user);
}

module.exports = { register, login, profile };