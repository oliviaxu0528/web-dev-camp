const express = require("express")
const bodyParser = require("body-parser")
const request = require("request");

const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send("hello world!!")
})
app.listen(3000, () => {
    console.log(`example listen to 3000`)
})