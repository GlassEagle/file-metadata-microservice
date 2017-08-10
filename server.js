"use strict";

var express = require("express");
var mongoose = require("mongoose");
var multer = require("multer");
var filemetadataHandler = require("./controllers/filemetadataHandler.server.js");

var upload = multer();
var app = express();
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/data", {useMongoClient: true});

app.get("/", function(req, res){
    res.sendFile( process.cwd() + "/public/index.html");
});

app.post("/api/filemetadata", upload.single("file"), filemetadataHandler);

app.listen(process.env.PORT, function () {
  console.log('App listening on port %s!', process.env.PORT);
});