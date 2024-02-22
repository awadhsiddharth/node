// importing the v8 module
const v8 = require('v8');  
// extracting various information(objects) about the chrome
// and then printing it
console.log(v8.getHeapStatistics());
