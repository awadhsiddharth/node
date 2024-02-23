const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    // {
    //     console.error(err);
    // }
    // console.log(data.toString());
    console.log(data);
});

console.log(`Hellllllooo.....`);

fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), 'Nice to meet you!', (err) => {
    if (err) throw err;
    console.log(`Write operation complete`);

    fs.appendFile(path.join(__dirname, 'Files', 'reply.txt'), 'Nice to meet you!, I wish you all the best!!', (err) => {
        if (err) throw err;
        console.log(`Append operation complete`);

        fs.rename(path.join(__dirname, 'Files', 'reply.txt'), path.join(__dirname, 'Files', 'newreply.txt'), (err) => {
            if (err) throw err;
            console.log(`Rename of append operation complete`);
        });
    });
});


// fs.appendFile(path.join(__dirname, 'Files', 'append.txt'), 'Nice to meet you!, I wish you all the best!!', (err) => {
//     if (err) throw err;
//     console.log(`Write operation complete`);
// });



//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an error: ${err}`);
    process.exit(1);
});