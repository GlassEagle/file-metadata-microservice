"use strict";

var express = require("express");
var multer = require("multer");
var getfilesizeHandler = require("./controllers/getfilesizeHandler.server.js");

var upload = multer();
var app = express();

app.get("/", function(req, res){
    res.sendFile( process.cwd() + "/public/index.html");
});

app.post("/api/get-file-size", upload.single("file"), getfilesizeHandler);

app.listen(process.env.PORT, function () {
  console.log('App listening on port %s!', process.env.PORT);
});