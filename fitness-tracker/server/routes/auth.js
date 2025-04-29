const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Example: User registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash the password server-side
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to your database (replace with your db logic)
    const newUser = { username, password: hashedPassword };

    // For now just send back (in real app, save to DB)
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Example: User login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Fetch user from database (fake user for example)
    const user = { username: 'testuser', password: '$2a$10$abc123...' }; // Hashed password from DB

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare entered password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;