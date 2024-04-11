const fs = require('fs');

fs.readFile('./Files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    // {
    //     console.error(err);
    // }
    // console.log(data.toString());
    console.log(data);
});

console.log(`Hellllllooo.....`);

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an error: ${err}`);
    process.exit(1);
});
