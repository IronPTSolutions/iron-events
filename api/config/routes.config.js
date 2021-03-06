const createError = require('http-errors');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const secure = require('../middlewares/secure.middleware');
const events = require('../controllers/events.controller');
const users = require('../controllers/users.controller');
const upload = require('./multer.config');

const GOOGLE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
]

router.get('/events', events.list);
router.post('/events', secure.isAuthenticated, upload.single('image'), events.create);
router.get('/events/:id', events.get);
router.delete('/events/:id', secure.isAuthenticated, events.delete);
router.put('/events/:id', secure.isAuthenticated, upload.single('image'), events.update);

router.post('/users', users.create);
router.get('/users/:id', secure.isAuthenticated, users.get);
router.delete('/users/:id', secure.isAuthenticated, users.delete);
router.patch('/users/:id', secure.isAuthenticated, users.update);

router.post('/login', users.login);
router.post('/logout', users.logout);

router.get('/authenticate/google', passport.authenticate('google-auth', { scope: GOOGLE_SCOPES }))
router.get('/authenticate/google/cb', users.loginWithGoogle)

router.post('/totp', users.totp);

/** Movemos el handler el 404 a este router para que solo afecte a la api,
 * así podemos controlar desde el app.js que el resto de peticiones vayan al react
 */
router.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

module.exports = router;
