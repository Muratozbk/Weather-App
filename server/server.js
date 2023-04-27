const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// const weatherData = require('./example.json')

app.get("/weather", (req, res) => {
    const { lat, lon } = req.query
    console.log(lat, lon)
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat,
            lon,
            appid: '7eeba2fe33e21f0febbd0f44c3522f47',
            // unit: 'imperial',
            // exclude: "minutely,alerts",
        }
    }).then(({ data }) => {
        res.json(data)
    }).catch(e => {
        console.log(e)
        res.sendStatus(500)
    })
})

app.listen(3001)

