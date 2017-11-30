var express = require('express')
var app = express()
var multipart = require('connect-multiparty')
var multipartMiddleware = multipart()

app.get('/', function (req, res, next) {
  res.render('index', { title: 'Quorama Server - Jenkins Plugin Demo Page' })  
})

app.post('/artifacts/add', multipartMiddleware, function(req, res, next) {
  console.log(req.headers)
  console.log(req.body)
  console.log(req.files)

  var project_name = req.headers['quorama-project'];
  
  req.files.forEach(file => {
    console.log(file)
    var file_name = file.originalFilename;
    var file_path = file.path;
  });

  res.json(200, {status: true})
});

module.exports = app;