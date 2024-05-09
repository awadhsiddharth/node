const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Admin",
    database: "mydb"
});


conn.connect((err) => {
    if (err) {
        console.error("Error while connecting to database!");
    }
    else {
        console.log("Database Connected!");
    }
    var sql = "CREATE TABLE employee(id int,name varchar(255), address varchar(255))";
    conn.query(sql, (err, res) => {
        if (err) {
            console.error(err);
        }
        console.log(`Table Created!`);
    });
});
