//Using express.js
var express = require('express');
var app = express();
var fs = require("fs");

//Listing out all the cars from out cars.json file
app.get('/listCars', function(req, res) {
    fs.readFile(__dirname + "/" + "Exercise_Dataset.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

//Creating a new car to add to the list of cars
var user = {
    addNewCar: {
        "make": "Toyota",
        "model": "Camry",
        "year": "2021",
        "vehicle_count": "312",
        "price": "21000"
    }
}

app.post('/addCars', function(req, res) {
    // First read existing users.
    fs.readFile(__dirname + "/" + "Exercise_Dataset.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["cars"] = user["cars"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

//Running the server
var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening at http://localhost:8081/Exercise_Dataset.json", host, port)
})