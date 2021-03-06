'use strict';

// External Dependencies
const express = require('express');
// Internal Dependencies
const { NotFoundError } = require('./expressError');

const app = express();

const authRoutes = require('./routes/auth');

app.use(express.json());

app.use('/', authRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res) {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;