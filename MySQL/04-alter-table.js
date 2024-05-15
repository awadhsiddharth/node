const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error(`Error while connecting to darabase!`)
    } else {
        console.log(`DB CONNECTED!`);
    }
    var sql = "CREATE TABLE employee(id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255), address varchar(255))";
    conn.query(sql, (err, result) => {
        if (err) {
            console.error(`Error` + err);
        } else {
            console.log(`Table Created!`);
        }
    });
});


// if table is already created we need to use alter query

// conn.connect((err) => {
//     if (err) {
//         console.error('Error while connecting');
//     } else {
//         console.log(`DB CONNECTED!`);
//     }
    // the sql query is written so by assumng that 
    // no id field is taken into the table in account while 
    // creating table employee
//     var sql = "ALTER TABLE employee ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//     conn.query(sql, (err, res) => {
//         if (err) {
//             console.error(err);
//         }
//         else {
//             console.log(`Table altered!`);
//         }
//     });
// });
