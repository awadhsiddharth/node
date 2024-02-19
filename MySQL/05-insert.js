// const mysql = require('mysql2');
// const con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'Admin',
//     database: 'mydb'
// });

// con.connect((err) => {
//     if (err) {
//         console.error('Error while connecting to database!');
//     }
//     else {
//         console.log(`DB CONNECTED!`);
//     }
//     // insert 1 data into table
//     var sql = `INSERT INTO employee (name, address) VALUES ('Ananya Singh', 'Andrewsganj');`;
//     con.query(sql, (err, res) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(`One data Inserted!`);
//         }
//     });
// });

// for making multiple entry into databases

const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Admin',
    database: 'mydb'
});

conn.connect((err) => {
    if (err) {
        console.error('Error while connecting to database!');
    }
    else {
        console.log(`DB CONNECTED!`);
    }
    // insert multiple data into table
    var sql = `INSERT INTO employee(name, address) VALUES ?`;
    // creating an array of element and storing into var values
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    conn.query(sql, [values], (err, res) => {
        if (err) {
            console.error(err);
        } else {
            // res.affectedRows --> count of affected rows in the table
            console.log(`Number of records inserted: ` + res.affectedRows);
        }
    });
});
