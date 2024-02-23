// Node js is javascript runtime build on top of Google
// Chrome's v8 engine, its not exactly framework or library

// How NodeJS differs from VanillaJS
// 1) Node runs on a server -  not in a browser(backend not frontend)
// 2) The console is the terminal window, not in the browser
console.log(`Hey there!`);
// 3) global object instead of window object
// console.log(global);
// 4) Has common core modules that we will explore
// 5) CommonJS modules instance of ES6 modules 


const os = require('os');


console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);


const path = require('path');

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

// this will print all(root,dir,base,ext,name)
console.log(path.parse(__filename));
