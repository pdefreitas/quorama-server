var express = require('express')
var app = express()
var multipart = require('connect-multiparty')
var multipartMiddleware = multipart()

app.get('/', function (req, res, next) {
  res.render('index', { title: 'Quorama Server - Jenkins Plugin Demo Page' })  
})

app.post('/artifacts/add', multipartMiddleware, function(req, res, next) {
  console.log(req.body, req.files);
  res.json(200, {status: true})
});

module.exports = app;