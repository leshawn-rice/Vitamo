DROP DATABASE IF EXISTS vitamo_db;
CREATE DATABASE vitamo_db;

\c vitamo_db

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT FALSE
);

CREATE TABLE Foods (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  calories INT NOT NULL
);

-- Foods the user has saved/bookmarked
CREATE TABLE Users_Foods (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users,
  food_id INT REFERENCES Foods
);