// // // CommonJS, every file is module(by default)
// // // Modules- Encapsulated code(only share minimum)

// // // const secret = 'SUPER SECRET'
// // // const john = 'john';
// // // const peter = 'peter';

// // // const sayHi = ((name) => {
// // //     console.log(`Hey there ${name}`);
// // // });

// // const names = require('./4-names');
// // const sayHi= require('./5-utils')
// // const data = require('./6-alter')

// // require('./7-mind')

// // // console.log(data);

// // // // console.log(names);
// // // sayHi('Harry');
// // // sayHi(names.john);
// // // sayHi(names.peter);


// // Built in module
// const { log } = require('console');
// const os = require('os');

// // infor abt current user
// // const user = os.userInfo();
// // console.log(user);
// // console.log(os.userInfo());

// // method returns the system uptime in seconds
// console.log(`The system uptime is : ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),    // os type=mac,window,linux
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);
// console.log("Hello People! How are you guys?");

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    if (req.url === '/about') {
        // Blocking Code!!

        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About Page');
    }
    res.end('Error Page');
});

server.listen(5000, () => {
    console.log((`Server is listening on port : 5000..`));
});