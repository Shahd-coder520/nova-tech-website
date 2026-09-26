import Database from "better-sqlite3";

const db =  new Database('nova.db');


    db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT, role TEXT);");

    db.exec("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, image TEXT);");


   /* try {
        db.prepare("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)").run("Shahd", "abshahd612@gmail.com", "123456", "admin");
    } catch (error) {
        console.error("Error occurred while inserting user:", error);
    }
*/
    export default db;