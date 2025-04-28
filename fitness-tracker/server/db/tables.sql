CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create Exercise Types Table
CREATE TABLE IF NOT EXISTS exercise_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Create Activities Table
CREATE TABLE IF NOT EXISTS activities (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  exercise_type_id INTEGER REFERENCES exercise_types(id) ON DELETE CASCADE,
  duration INTEGER,
  date TIMESTAMP DEFAULT NOW()
);