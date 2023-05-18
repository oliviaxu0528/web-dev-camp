const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {

    const location = req.body.cityName
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=799ae4007ae6c7bef82ffdc39c3fa57b"
    https.get(url, (response) => {
        console.log(response.statusCode)
        response.on('data', (data) => {
            const weatherData = JSON.parse(data)
            const temperature = (weatherData.main.feels_like - 273.15).toFixed(2);
            const desc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            res.write(`<p>The weather is currently ${desc}!!!</p>`)
            res.write(`<h1>the temp in ${location} is ${temperature}, and the sky is ${desc}</h1>`)
            const icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write(`<img src=${icon_url} alt=${desc}/>`)
            res.send()
        })
    })
})


app.listen(port, () => {
    console.log(`example listen to 3000`)
})