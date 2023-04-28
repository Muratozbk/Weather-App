const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get("/weather", (req, res) => {
    const { lat, lon } = req.query
    axios
        .get("https://api.openweathermap.org/data/3.0/onecall", {
            params: {
                lat,
                lon,
                appid: process.env.API_KEY,
                units: "imperial",
                exclude: "minutely,alerts",
            },
        })
        .then(({ data }) => {
            res.json({
                current: parseCurrentWeather(data),
                daily: parseDailyWeather(data),
                hourly: parseHourlyWeather(data),
            })
        })
        .catch(e => {
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

