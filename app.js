// ASSIGNMENT 1 - DAVID O'LEARY
// You are asked to produce an application that inputs the city that someone is planning
// to go to. Your server-side should use the openweathermap API to get the weather
// forecast for that city for the next 4 days. The client side should then display some
// summary information including:
// • Packing: if there is rain anytime over the next 4-days indicate that the user should
// bring an umbrella.
// • Indicate the type of whether that the user should pack for Cold (temperatures below
// 12C), Mild (temperatures from 12C to 24C inclusive) or Hot (temperatures above
// 24C).
// • Give a summary table for the next 4 days showing: Temperature, Wind Speed and
// Rainfall level.
// The openweathermap API is documented here: https://openweathermap.org/api
// When you request the weather data for a city, it will return you the Longitude and
// Latitude of the city. You can then use these in the AIR Pollution API to get the PM2_5
// 2 of	4
// School	of	Computer	Science	and	Statistics
// CSU44000 – Internet Applications
// 2022/2023
// forecast for the next 5 days. If this exceeds 10, then you should advise the user to
// wear a mask.
// On completion of these core feature you should implement one innovative and
// creative feature which requires that is unique to your Internet Application. This
// innovative feature should involve a non-trivial addition or modification of both the
// client and the server.

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
    let city = req.params.city; //parse city from parameters 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=4fdc6fc9b1566dd7f9219f4192842c33`) //gets five day forecast of city 
    .then(res => res.json()) //waiting for response then converting it to json object
    .then(json => {  //waiting for previous then and then printing it out and returning it to client
        console.log(json);
        let result = json;
        res.send(result); //returning json object to client
    })
}

app.get('/air_pollution/:lon/:lat', getAirPollution)
// make call to air pollution
function getAirPollution(req, res) {

    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lon}&lon=${lat}&appid=4fdc6fc9b1566dd7f9219f4192842c33`)
    .then(res => res.json()) //waiting for response then converting it to json object
    .then(json => {  //waiting for previous then and then printing it out and returning it to client
        console.log(json);
        let result = json;
        res.send(result); //returning json object to client
    })
}

