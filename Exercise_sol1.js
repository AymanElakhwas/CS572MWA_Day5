const express = require('express');
const fetch = require('node-fetch');


const server = express();

server.set('trust proxy', true);
server.set('strict routing', true);
server.set('case sensitive routing', true);
server.set('x-powered-by', false);
server.listen(3000, () => { console.log("listening on port 3000") });

server.get('/users', (request, response) => {
    fetch('http://jsonplaceholder.typicode.com/users').then((data) => data.buffer()).then((buffer) => {
        response.send(buffer.toString());
    });
});