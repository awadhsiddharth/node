// to use specific method we write them explicitly
const { readFile, writeFile } = require('fs');

console.log('start');
// to use all we write
// const fs= require('fs')


readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = result;
        writeFile('./content/result-async.text',
            `Here is the result: ${first}, ${second}`,
            ((error, result) => {
                if (error) {
                    console.log(error);
                    return;
                }
                console.log(`done with this task`);
            }));
    });
});

console.log(`starting next task`);

