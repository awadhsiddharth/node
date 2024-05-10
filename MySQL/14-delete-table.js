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
    var sql = 'DROP TABLE employee';
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Table Deleted!');
        }
    });    
});


// delete table iff it exists

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
//     var sql = 'DROP TABLE IF EXISTS employee';
//     conn.query(sql, (err, res) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log('Table Deleted!');
//         }
//     });    
// });
