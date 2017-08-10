"use strict";

function getfilesizeHandler(req, res){
    if(!req.file){
        res.status(400);
        res.send("ERROR: no file uploaded");
        return;
    }
    var data = {size: req.file.size};
    data = JSON.stringify(data);
    res.setHeader("content-type", "application/json");
    res.send(data);
}

module.exports = getfilesizeHandler;