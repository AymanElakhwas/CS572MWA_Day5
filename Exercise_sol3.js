const express = require('express');
const fetch = require('node-fetch');


const server = express();

server.set('trust proxy', true);
server.set('strict routing', true);
server.set('case sensitive routing', true);
server.set('x-powered-by', false);
server.listen(3000, () => { console.log('listening on port 3000') });


server.get('/users', async (request, response) => {
    response.send(await fetchData());
});


async function fetchData() {
    const data = await fetch('http://jsonplaceholder.typicode.com/users');
    const buffer = await data.buffer();
    const json = buffer.toString();
    return json;
}


