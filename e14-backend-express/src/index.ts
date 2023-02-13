import express from "express";

const port = 3000
const app = express();

app.use(express.urlencoded());

let name = "Benedikt"

app.get('/hello', (req, res) => {
    let jsn = {name: name};
    console.log(jsn)

    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(jsn);
})

app.get('/goodbye', (req, res) => {
    name = "Benedikt"

    res.redirect("/hello");
})

app.post('/hello', (req, res) => {
    name = req.body.name;

    res.redirect("/hello");
})

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/frontend/index404.html");
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})