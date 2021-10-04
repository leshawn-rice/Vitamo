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

CREATE TABLE Grocery_Lists (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users,
  name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE Grocery_List_Items (
  id SERIAL PRIMARY KEY,
  grocery_list_id INT REFERENCES Grocery_Lists,
  info JSON NOT NULL
);

CREATE TABLE Meal_Plans (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES Users,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  target_calories INT NOT NULL,
  diet_type TEXT DEFAULT NULL
);

CREATE TABLE Restrictions (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE Meal_Plans_Restrictions (
  id SERIAL PRIMARY KEY,
  meal_plan_id INT REFERENCES Meal_Plans,
  restriction_id INT REFERENCES Restrictions
);

CREATE TABLE Recipe_Queries (
  id SERIAL PRIMARY KEY,
  query TEXT NOT NULL,
  result JSON NOT NULL
);

CREATE TABLE Ingredient_Queries (
  id SERIAL PRIMARY KEY,
  query TEXT NOT NULL,
  result JSON NOT NULL
);

CREATE TABLE Product_Queries (
  id SERIAL PRIMARY KEY,
  query TEXT NOT NULL,
  result TEXT NOT NULL
);