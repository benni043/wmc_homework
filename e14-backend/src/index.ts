import {createServer, IncomingMessage, ServerResponse} from "http";

const port = 3000
const fs = require('fs');
createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(fs.readFileSync("src/index.html"))
    res.end()

    if(req.method == 'GET') {
        if(req.url == '/hello') {

        }
        if(req.url == '/goodbye') {

        }
    }

    if(req.method == 'POST') {
        if(req.url == '/hello') {

        }
    }

}).listen(port, () => console.log(`Server listens on ${port}`))