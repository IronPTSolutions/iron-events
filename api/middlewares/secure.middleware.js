const createError = require('http-errors');

module.exports.isAuthenticated = (req, res, next) => {
  //if (req.isAuthenticated() && req.session.secondFactor) { disable 2FA ;)
  if (req.isAuthenticated()) {
    next();
  } else {
    next(createError(401, 'user is not authenticated'))
  }
};
