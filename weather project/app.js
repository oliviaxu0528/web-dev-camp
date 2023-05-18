const express = require("express");
const https = require("https");


const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!~~~~')
})

app.listen(port, () => {
    console.log(`example listen to 30000`)
})