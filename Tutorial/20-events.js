// Events - heavily used in node
// event-driven programming

// note EventEmitter is a class
const EventEmitter = require('events');

const customEmitter = new EventEmitter();
// on function takes 2 parameter, event and callback
customEmitter.on('response', (name, id) => {
    console.log(`Data received of username: ${name} with id : ${id}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here `);
});

customEmitter.on('response', () => {
    console.log(`some more logic here `);
});

// The order of these method is imp
// listening should be 1st followed by emit
customEmitter.emit('response','john',34);