const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + "/index.html")
})

//calculator
app.post("/", (req, res) => {
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1 * num2;
    res.send(result.toString());
})

app.get('/bmi', (req, res) => {
    res.sendFile(__dirname + "/bmiCalc.html")
})

app.post("/bmi", (req, res) => {
    var w2 = parseFloat(req.body.weight);
    var h2 = parseFloat(req.body.height);
    var result = w2 / (h2 * h2);
    console.log(w2);
    console.log(h2);
    console.log(result);
    res.send(result.toString());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})