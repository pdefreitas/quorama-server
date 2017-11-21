var express = require('express')
var jenkins = require('./ci/jenkins')
var app = express()

app.use('/jenkins', jenkins);

module.exports = app;