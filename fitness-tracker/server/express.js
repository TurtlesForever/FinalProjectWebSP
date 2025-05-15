app.get('/api/friends/search', async (req, res) => {
  const query = req.query.q;
  if (!query || query.length < 2) return res.json([]);

  try {
    const friends = await db.Friends.find({
      name: { $regex: query, $options: 'i' },
    }).limit(10);
    res.json(friends);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});