const express = require('express');
const app = express();

app.use(express.json());

const timezone = require('./routes/timezone');

app.use('/api',timezone)

module.exports = app;