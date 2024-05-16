// const mysql = require('mysql2');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Admin',
//     database: 'mydb'
// });

// conn.connect((err) => {
//     if (err) {
//         console.error(`Error`);
//     } else {
//         console.log(`DB CONNECTED!`);
//     }
//     const sql = `SELECT * FROM employee`;
//     conn.query(sql, (err, res) => {
//         if (err) {
//             console.error(`Error`);
//         }
//         else {
//             console.log(res);
//         }
//     });
// });

const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error(`Error`);
    } else {
        console.log(`DB CONNECTED!`);
    }
    // const sql = `SELECT * FROM employee`;
    conn.query('select * from employee', (err, res) => {
        if (err) {
            console.error(`Error`);
        }
        else {
            console.log(res);
        }
    });
});
