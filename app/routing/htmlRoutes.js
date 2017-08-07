//Dependencies//
var path = require('path');
var express = require('express');
var app = express();

//Routing================================//

module.exports = function(app) {

    //Home Page//
    app.get('/home', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    //Survey Page//
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //Default Handler that directs any undefined url to Home Page//
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

    //Makes public directory static so we can add css, etc//
    app.use(express.static(path.join(__dirname, '../public')));
};
