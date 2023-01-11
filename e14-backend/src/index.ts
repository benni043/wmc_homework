import {createServer, IncomingMessage, ServerResponse} from "http";

const port = 3000
const fs = require('fs');
createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(fs.readFileSync("src/index.html"))

    if (req.method == 'GET' && req.url == '/hello') {
        getHello(req, res)
    }
    if (req.method == 'GET' && req.url == '/goodbye') {
        getGoodbye(req, res)
    }
    if (req.method == 'POST' && req.url == '/hello') {
        postHello(req, res)
    }

    res.end()

}).listen(port, () => console.log(`Server listens on ${port}`))


function getHello(req: IncomingMessage, res: ServerResponse) {
}

function getGoodbye(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(301, {"Location": "/hello"})
}


function postHello(req: IncomingMessage, res: ServerResponse) {
    let rawData = '';

    req.on('data', chunk => {
        rawData += chunk
    })
    req.on('end', () => {
        console.log(rawData)
        res.end();
    })
}