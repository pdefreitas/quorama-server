'use strict';

var IndexModel = require('../../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {    
        res.render('index', model);
    });

    router.post('/new', function (req, res) {
        console.log(req);
        console.log(res);
        res.send('ok');
    });

};
