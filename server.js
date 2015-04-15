var HTTP = require("http")

var express = require("express"),
    bodyParser = require("body-parser"),
    validator = require("validator"),
    app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var mongoURI = process.env.MONGOLAB_URI || process.env.MONGOHQ_URI ||
               "mongodb://ds061721.mongolab.com:61721/heroku_app35879167",
    mongoose = require("mongoose")

mongoose.connect(mongoURI)
var db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function(callback) {
    console.log("Opened mongoose db")
})

var locationSchema = mongoose.Schema({
    login: String,
    lat: Number,
    lng: Number,
    created_at: Date
})

var Location = mongoose.model("Location", locationSchema)

alert("Done")