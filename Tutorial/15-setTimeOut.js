// starting os process
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
// note that setTimeout is a callback which is method of type asynchronous
// so what happends is that it allows next function/varibale/or print
// statement to run first,and when all code is finished it will run
// ie setTimeOut is off-loaded as it is asynchronous
console.log('third');
//completed and exited os process