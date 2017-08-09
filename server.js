"use strict";

var express = require("express");
var mongoose = require("mongoose");

var app = express();
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/data", {useMongoClient: true});

app.listen(process.env.PORT, function () {
  console.log('App listening on port %s!', process.env.PORT);
});