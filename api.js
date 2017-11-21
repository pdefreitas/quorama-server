var express = require('express')
var plugins = require('./plugins/plugins')
var app = express()

app.use('/plugins', plugins);

module.exports = app;