// Built in module
const { log } = require('console');
const os = require('os');


// infor abt current user
// const user = os.userInfo();
// console.log(user);
// console.log(os.userInfo());

// method returns the system uptime in seconds
console.log(`The system uptime is : ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),    // os type=mac,window,linux
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);