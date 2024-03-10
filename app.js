// console.log('Express Tutorial')

const http = require('http');
const { readFileSync } = require('fs');

// get all files
const homePage = readFileSync('./index.html');

const server = http.createServer((req, res) => {
    // console.log('user hit the server');
    // req is giant object containing alot of info
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;
    // home page
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.write('<h1>Home Page</h1>')
        res.write(homePage)
        res.end();
    }
    // about page
    else if (url === '/abt') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About Page</h1>')
        res.end();
    }
    // 404
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Oops!! Page Not Found!</h1>')
        res.end();
    }


    // providing headers/ or metadata
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write('<h1>Home Page</h1>')
    // res.end();
    // res.end() must be called each response 
    // this method signals to the server that all the response
    // headers and body hv been sent, that server shud consider 
    // msg complete.
    // res.end('home page');
});

server.listen(5000);
