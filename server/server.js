const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// const weatherData = require('./example.json')
// ? lat = { lat } & lon={ lon }& exclude={ part }& appid={API key }
http://api.weatherapi.com/v1/current.json?key=14defa1e3c7c40e9be3181114232704&q=London&aqi=no

app.get("/weather", (req, res) => {
    const { lat, lon } = req.query
    axios.get(`http://api.weatherapi.com/v1/current.json?key=14defa1e3c7c40e9be3181114232704&q=London&aqi=no`).then(({ data }) => {
        res.json({
            current: parseCurrentWeather(data),
            daily: parseDailyWeather(data),
            hourly: parseHourlyWeather(data),

        })
    }).catch(e => {
        console.log(e)
        res.sendStatus(500)
    })
})

function parseCurrentWeather(data) {

}

function parseDailyWeather(data) {

}

function parseHourlyWeather(data) {

}

app.listen(3001)

