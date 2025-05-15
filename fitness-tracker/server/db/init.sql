CREATE TABLE IF NOT EXISTS activity_tags (
  activity_id INT REFERENCES activities(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (activity_id, user_id)
);