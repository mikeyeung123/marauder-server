var HTTP = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    validator = require("validator"),
    mongoURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URI ||
               "mongodb://ds061721.mongolab.com:61721/heroku_app35879167",
    mongoose = require("mongoose");