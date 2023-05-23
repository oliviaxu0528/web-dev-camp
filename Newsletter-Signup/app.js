const express = require("express")
const bodyParser = require("body-parser")
const request = require("request");
const https = require("https");

const app = express();
const port = 3000

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html")
})

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css")
})

app.post("/", (req, res) => {
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;
    var data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                fName: fName,
                lName: lName
            }
        }]
    };
    var jsonData = JSON.stringify(data);

    const url = "https://us21.api.mailchimp.com/3.0/lists/3d8fef9b63"

    const options = {
        method: "POST",
        auth: "oliviaxu:e226bfa102ec32f8ff126b1e7ba6b1d9-us21"
    }
    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.listen(3000, () => {
    console.log(`example listen to 3000`)
})
// API key
// e226bfa102ec32f8ff126b1e7ba6b1d9-us21
//  unique ID
// 3d8fef9b63