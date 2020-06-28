var express = require("express");
var app = express();

const server = app.listen(4200, () => {
    console.log("Server running on port 4200");
});

app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
