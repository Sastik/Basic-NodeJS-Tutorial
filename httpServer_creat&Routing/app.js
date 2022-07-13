const http = require('http');

//creat a webserver
const server = http.createServer((req, res) => {

    //routing webServer
    if (req.url == '/') {
        res.write('hello from the Home sides')
        res.end();
    }
    else if (req.url == '/about') {
        res.write('hello from the AboutUs side')
        res.end();
    }
    else if (req.url == '/contact') {
        res.write('hello from the contactUs side')
        res.end();
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>404 Error pages. page does not exist</h1>');
    };
})




// listening webServer
server.listen(8000, '127.0.0.1', () => {
    console.log('listening to the port number 8000....');
});
