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

  for (var key in req.files) {
    if (req.files.hasOwnProperty(key)) {           
        console.log(key, req.files[key])
        var file = req.files[key]
        var file_name = file.originalFilename
        var file_path = file.path
    }
  }

  res.status(200).json({status: true})
});

module.exports = app