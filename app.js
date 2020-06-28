var express = require("express");
var pjson = require('./package.json');

var app = express();

const server = app.listen(4200, () => {
    console.log("Server running on port 4200");
});

app.get("/v1/test", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/version", (req, res, next) => {
    res.json({
        "version": pjson.version
    });
});

