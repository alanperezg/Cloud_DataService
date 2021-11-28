const mysql = require('mysql2');

class DBConnection{
    constructor() {
        this.connection = mysql.createConnection({
            host : process.env.MYSQL_HOST,
            user : process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database : process.env.MYSQL_DATABASE
        });
    }

    query(query, values){
        return new Promise((resolve, reject)=>{
            this.connection.query(query, values, (err, rows, fields)=>{
                if (err) return reject(err)
                resolve(rows);
            });
        });
    }

    close(){
        return new Promise((resolve, reject)=>{
            this.connection.end(()=>{
                resolve();
            });
        });
    }
}

module.exports = DBConnection;