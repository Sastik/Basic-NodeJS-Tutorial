const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const data = fs.readFile(`${__dirname}`, "ytf-8");
    const ojData = JSON.parse(data);

    if (req.url == '/') {
        res.end('Helow from th home side');
    }
    else if (req.url == '/about') {
        res.end('  hellow from the aboutUs side');
    }
    else if (req.url == '/contact') {
        res.end('hello from the contactUs side');
    }
    else if (req.url == '/userapi') {
        //     fs.readFile(`${__dirname}`, "ytf-8", (err, data) => {
        //         console.log(data);
        //         const ojData =JSON.parse(data);
        //         res.end(data);
        res.writeHead(200, { "content-type": "application/json" })
        res.end(objData[2].name);
        //     })
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>404 error pages, page does not exist </h1>');
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log('listenning to the port number 8000 ');
});