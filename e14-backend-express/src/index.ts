import express from "express";

const port = 3000
const app = express();
const fs = require('fs');

app.use(express.urlencoded());

let name = "Benedikt"

app.get('/hello', (req, res) => {
    res.send(fs.readFileSync("src/frontend/index.html").toString().replace("*", name));
    res.end()
})

app.get('/goodbye', (req, res) => {
    name = "Benedikt"

    res.redirect("/hello");
})

app.post('/hello', (req, res) => {
    name = req.body.greeting;

    res.redirect("/hello");
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/frontend/index404.html");
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})