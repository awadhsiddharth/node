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

// offset- if u wanted to return 5 records starting from 3rd pos, u can use OFFSET 
// OFFSET 2 means starting from 3rd pos, not 2nd
// The nos are reversed: "LIMIT 2, 5" is sm as "LIMIT 5 OFFSET 2"

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