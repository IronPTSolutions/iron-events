require('dotenv').config();

const createError = require('http-errors');
const logger = require('morgan');
const express = require('express');

const app = express();

/** Middlewares */


/** Configure routes */


/** Handle Errors */


const port = Number(process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Ready! Listen on port ${port}`);
})
