// var mysql = require('mysql2');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Admin',
//     database: 'mydb'
// });

// conn.connect((err) => {
//     if (err) {
//         console.error(err);
//     }
//     else {
//         console.log('Db Connected!');
//     }

//     const sql = 'Select * FROM employee LIMIT 5';
//     conn.query(sql, (err, res) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(res);
//         }
//     });
// });

// offset

var mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error(err);
    }
    else {
        console.log('Db Connected!');
    }

    const sql = 'Select * FROM employee LIMIT 5 OFFSET 2';
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
});