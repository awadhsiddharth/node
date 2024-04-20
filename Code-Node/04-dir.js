const fs = require('fs');


// if a directory doesn't exist then create a directory
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`Directory Created!`);
    });
}

// if a directory exists, then remove the directory
if(fs.existsSync('./new')){
    fs.rmdir('./new', (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`Directory Removed!`);
    });
}
