const mongoose = require('mongoose');
const Event = require('../models/event.model');
const eventsData = require('../data/events.json');

require('../config/db.config');

mongoose.connection.once('open', () => {
  console.info(`*** Connected to the database ${mongoose.connection.db.databaseName} ***`);
  mongoose.connection.db.dropDatabase()
    .then(() => console.log(`- Database dropped`))
    .then(() => Event.create(eventsData))
    .then(events => console.info(`- Added ${events.length} events`))
    .then(() => console.info(`- All data created!`))
    .catch(error => console.error(error))
    .then(() => process.exit(0))
})

