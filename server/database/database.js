import mysql from "mysql2"

export const connectionPool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE, 	
    connectionLimit: 2,
	waitForConnections: true,
	queueLimit: 0 
}).promise()