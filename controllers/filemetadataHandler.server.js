"use strict";

function filemetadataHandler(req, res){
    var data = {size: req.file.size};
    data = JSON.stringify(data);
    res.setHeader("content-type", "application/json");
    res.send(data);
}

module.exports = filemetadataHandler;