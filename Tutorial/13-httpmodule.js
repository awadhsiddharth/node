const http = require('http');

// request- incoming request 
// response- what we are sending back
const server = http.createServer((request, response) => {
    // console.log(request);
    if (request.url === '/') {
        response.end(`Welcome to our home page`);
    }
    if (request.url === '/about') {
        response.end(`Here is our about page!`);
    }
    response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page which you are looking for.</p>
    <a href="/">back home</a>
    `)

});

server.listen(5000);