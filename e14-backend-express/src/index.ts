import express from "express";
import path from "path";

const port = 3000
const app = express();

app.use(express.urlencoded());
app.use(express.json())

let name = "Benedikt"

app.use(express.static(path.join(__dirname, "/frontend")));

app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/index.html"));
})

app.get("/getName", (req, res) => {
    res.json({name:name});
})

app.get("/goodbye", (req, res) => {
    name = "Benedikt"

    res.redirect("/hello");
})

app.post("/hello", (req, res) => {
    name = req.body.name;

    res.end();
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/index404.html"));
})

app.listen(port, () => {
    console.log(`server listening on port: ${port}`)
})