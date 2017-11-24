var express = require('express')
var app = express()

app.get('/', function (req, res, next) {
  res.render('index', { title: 'Quorama Server - Jenkins Plugin Demo Page' })  
})

app.post('/artifacts/add', function(req, res, next) {
  res.json(200, {status: true})
});

module.exports = app;