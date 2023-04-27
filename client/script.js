import axios from "axios"
navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

function positionSuccess({ coords }) {
    getWeather(coords.latiude, coords.longitude)
}

function positionError() {
    alert('There was an error getting your location. Please allow us to use your location and refresh the page')
}
console.log(12222)

function getWeather(lat, lon) {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${'19b6050a15da8e692b5028e925466c6c'}`).
        then(res => {
            console.log(res.data)
        })
}
