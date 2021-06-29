//Using express.js
var express = require('express');
var app = express();
var fs = require("fs");

//Listing out all the cars from out cars.json file
app.get('/listCars', function(req, res) {
    fs.readFile(__dirname + "/" + "cars.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

//Creating a new car to add to the list of cars
var user = {
    "car4": {
        "make": "Dodge",
        "model": "Charger",
        "year": "2020",
        "id": 4
    }
}

app.post('/addCars', function(req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "cars.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["car4"] = user["carr4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//Running the server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})