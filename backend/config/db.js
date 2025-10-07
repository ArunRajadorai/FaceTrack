const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'attendance_sys',
    multipleStatements: true,  // Allows multiple queries in a single call (optional, based on needs)
});

db.connect((err) => {
    if (err) {
        console.error("❌ Error in DB connection: ", err.message);
    } else {
        console.log("✅ DB Connected successfully");
    }
});
// Second Database Connection
const db2 = mysql.createConnection({
    host: process.env.DB2_HOST || 'localhost',
    user: process.env.DB2_USER || 'root',
    password: process.env.DB2_PASS || 'root',
    database: process.env.DB2_NAME || 'second_database',
    multipleStatements: true,
});

db2.connect((err) => {
    if (err) {
        console.error("❌ Error connecting to secondary DB:", err.message);
    } else {
        console.log("✅ Secondary DB connected successfully");
    }
});
#module.exports = { db, db2 };
module.exports = db;
