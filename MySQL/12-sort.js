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
    // for ascending
    // conn.query('SELECT * FROM employee ORDER BY name', (err, res) => {
    // for descending
    conn.query('SELECT * FROM employee ORDER BY name desc', (err, res) => {
        if (err) {
            console.error(err);
        } else {
            console.log(res);
        }
    });
});
