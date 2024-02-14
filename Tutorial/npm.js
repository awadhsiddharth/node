// npm- node package manager , global command, which comes node
// npm -- version

// local dependency- use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file(stores important info abt project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)
// to not rerun the code time and again, we need to install nodemon
// npm i nodemon -D/ npm i nodemon --save-dev
// "dev": "nodemon app.js", add this code in script section of package.json

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

// flattenDeep method just make nested array into a single array
const newItems = _.flattenDeep(items);
console.log(newItems);


