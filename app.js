// ASSIGNMENT 1 - DAVID O'LEARY 
const express = require('express')
const app = express()
const port = 5500
const fetch = require("node-fetch")
const path = require("path")
let publicPath = path.resolve(__dirname, "public")
app.use(express.static(publicPath))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/forecast/:city', getWeather)

//make call to 5 day forecast
function getWeather(req, res) {
    let city = req.params.city;
    // get the 5 day forecast 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=4fdc6fc9b1566dd7f9219f4192842c33`)
    // wait for a response then converting it to json object
    .then(res => res.json()) 
    .then(json => {  
        console.log(json);
        let result = json;
        // send the json with data to the client
        res.send(result); 
    })
}

app.get('/air_pollution/:lon/:lat', getAirPollution)
// make call to air pollution
function getAirPollution(req, res) {
    // get the air pollution data
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lon}&lon=${lat}&appid=4fdc6fc9b1566dd7f9219f4192842c33`)
    // wait for a response then converting it to json object
    .then(res => res.json()) 
    .then(json => {  
        console.log(json);
        let result = json;
        // send the json with data to the client
        res.send(result);
    })
}
