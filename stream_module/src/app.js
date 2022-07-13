const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', (req, res) => {

    //normal method to read file-----

    // fs.readFile('input.txt', (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data.toString());
    // });


    // stream meathod to read file------

    // const rstream = fs.createReadStream('input.txt');
    // rstream.on('data',(chunkdata)=>{
    //   res.write(chunkdata);
    // });
    // rstream.on('end' ,()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end('FILE NOT FOUND')
    // });

    // sort  streamming method to read file -----
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);


});
server.listen(8000,'127.0.0.1'); 