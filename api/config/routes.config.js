const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');
const users = require('../controllers/users.controller');

router.get('/events', events.list);
router.post('/events', events.create);
router.get('/events/:id', events.get);
router.delete('/events/:id', events.delete);
router.put('/events/:id', events.update);
router.post('/users', users.create);
router.get('/users/:id', users.get);
router.delete('/users/:id', users.delete);
router.patch('/users/:id', users.update);

module.exports = router;
