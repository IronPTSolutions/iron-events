const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');

router.get('/events', events.list);
router.post('/events', events.create);
router.get('/events/:id', events.get);
router.delete('/events/:id', events.delete);
router.put('/events/:id', events.update);

module.exports = router;
