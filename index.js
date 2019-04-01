const express=require('express');
const https = require('https');
const http = require('http');
const file = require('fs');
var app= express();
var request = require('request');

var client_id = "1e39d350-4431-4144-8bb2-f4ed698caa5b";
var client_secret = "gNpHBngnnU64VsPniCVYrMMkO8R6BJrzsuCbZk+qmRw=";
var microsoft_id = "4d2721f1-fc2e-4691-af82-4e82f12ed0da ";

var reply_url = "http://localhost:3000"




app.listen(3000,() => {
    console.log('express server started');
})

//console.log("index file")


var options = {
    host: "login.windows.net",
    path: "/" + microsoft_id + "/oauth2/token",
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
};

var req = https.request(options, function (res) {
    var responseString = "";

    res.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    res.on("end", function () {
        var api_data = responseString;
        console.log(api_data); 
        // print to console when response ends
    });
});




