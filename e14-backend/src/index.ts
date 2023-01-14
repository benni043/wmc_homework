import {createServer, IncomingMessage, ServerResponse} from "http";

const port = 3000
const fs = require('fs');

let rawData = "Benedikt";

createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method == 'GET' && req.url == '/hello') {
        getHello(req, res)
    } else if (req.method == 'GET' && req.url == '/goodbye') {
        getGoodbye(req, res)
    } else if (req.method == 'POST' && req.url == '/hello') {
        postHello(req, res)
    } else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write("404")
        res.end()
    }

}).listen(port, () => console.log(`Server listens on ${port}`))


function getHello(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(Buffer.from(fs.readFileSync("src/index.html").toString().replace("*", rawData)));
    res.end()
}

function getGoodbye(req: IncomingMessage, res: ServerResponse) {
    rawData = "Benedikt";

    res.writeHead(302, {"Location": "/hello"})
    res.end()
}

function postHello(req: IncomingMessage, res: ServerResponse) {
    rawData = "";

    req.on('data', chunk => {
        rawData += chunk
    })
    req.on('end', () => {
        rawData = rawData.split("=")[1];

        res.writeHead(302, {"Location": "/hello"})
        res.end()
    })
}