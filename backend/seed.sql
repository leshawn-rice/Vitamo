CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  confirmed BOOLEAN DEFAULT FALSE
);

CREATE TABLE Foods (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL NULL,
  description TEXT NOT NULL,
  calories INT NOT NULL
);

-- Foods the user has saved/bookmarked
CREATE TABLE Users_Foods (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users,
  food_id INT REFERENCES Foods
);