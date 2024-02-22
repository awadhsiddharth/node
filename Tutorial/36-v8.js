// importing the v8 module
const v8 = require('v8');  
// extracting various information(objects) about the chrome
// and then printing it
console.log(v8.getHeapStatistics());

const heapCodeStats = v8.getHeapCodeStatistics();
console.log(heapCodeStats);

const heapStats = v8.getHeapStatistics()
console.log(heapStats);
