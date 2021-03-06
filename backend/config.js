'use strict';

require('dotenv').config();

// Obviously remove 'secret-dev' before this goes to production
const SECRET_KEY = process.env.SECRET_KEY || 'secret-dev';
const PORT = +process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === 'test') ? 'vitamo_db_test' : process.env.DATABASE_URL || 'vitamo_db';
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === 'test' ? 1 : 12;

module.exports = {
  SECRET_KEY,
  PORT,
  API_KEY,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};