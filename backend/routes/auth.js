const express = require('express');
const router = express.Router();


router.post('login', (req, res, next) => {
  try {
    // do some authentication
    // login the user
    // return a token
  }
  catch (err) {
    return next(err);
  }
});

module.exports = router;