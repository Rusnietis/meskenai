const mysql = require('mysql');
const md5 = require('md5');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database!');
});


// Create users table
const createUsersTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        session CHAR(32) NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        role ENUM('admin', 'user', 'lib') NOT NULL DEFAULT 'user',
        password VARCHAR(32) NOT NULL
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Users table created');
    });
};

// Create authors table
const createAuthorsTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS authors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100) NOT NULL,
        nickname VARCHAR(100) NULL,
        born DATE NOT NULL
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Authors table created');
    });
};

// Create books table
const createBooksTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        pages INT(5) NOT NULL,
        genre VARCHAR(100) NOT NULL,
        author_id INT NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors(id)
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Books table created');
    });
};

// Create heroes table
const createHeroesTable = _ => {
    const sql = `CREATE TABLE IF NOT EXISTS heroes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        good BOOLEAN NOT NULL DEFAULT 1,
        image VARCHAR(200) NULL,
        book_id INT NOT NULL,
        FOREIGN KEY (book_id) REFERENCES books(id)
    )`;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Heroes table created');
    });
};

// Drop users table
const dropUsersTable = _ => {
    const sql = 'DROP TABLE IF EXISTS users';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Users table dropped');
    });
};

// Drop authors table
const dropAuthorsTable = _ => {
    const sql = 'DROP TABLE IF EXISTS authors';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Authors table dropped');
    });
};

// Drop books table
const dropBooksTable = _ => {
    const sql = 'DROP TABLE IF EXISTS books';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Books table dropped');
    });
};

// Drop heroes table
const dropHeroesTable = _ => {
    const sql = 'DROP TABLE IF EXISTS heroes';
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Heroes table dropped');
    });
};

// Seed users table
const seedUsersTable = _ => {
    const sql = `INSERT INTO users (name, email, role, password) VALUES 
    ('Briedis', 'briedis@gmail.com', 'admin', '${md5('123')}'),
    ('Bebras', 'bebras@gmail.com', 'user', '${md5('123')}'),
    ('Barsukas', 'barsukas@gmail.com', 'lib', '${md5('123')}')
    `;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Users table seeded');
    });
}

// Seed authors table
const seedAuthorsTable = _ => {
    const sql = `INSERT INTO authors (name, surname, nickname, born) VALUES 
    ('John', 'Tolkien', 'Tolkinas', '1892-01-03'),
    ('Abrams', 'Rowling', NULL, '1965-07-31'),
    ('Stephen', 'King', NULL, '1947-09-21'),
    ('George', 'Martin', 'Georg', '1948-09-20'),
    ('Kate', 'Martin','Cyborg', '1948-09-20')
    `;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Authors table seeded');
    });
}

// Seed books table
const seedBooksTable = _ => {
    const sql = `INSERT INTO books (title, pages, genre, author_id) VALUES 
    ('Hobitas', 1256, 'Fantasy', 1),
    ('Harry Potter', 587, 'Fantasy', 2),
    ('The Shining', 310, 'Horror', 3),
    ('A Game of Thrones', 562, 'Fantasy', 4),
    ('A Clash of Kings', 865, 'Drama', 5),
    ('A Storm of Swords', 987, 'Fantasy', 5),
    ('A Feast for Crows', 654, 'Sci-fi', 3),
    ('A Dance with Dragons', 789, 'Comedy', 5),
    ('The Winds of Winter', 1234, 'Fantasy', 2),
    ('A Dream of Spring', 987, 'Fantasy', 5),
    ('The Lord of the Rings', 1256, 'Sci-fi', 1),
    ('The Silmarillion', 587, 'Fantasy', 4),
    ('The Children of Hurin', 310, 'Drama', 2),
    ('Unfinished Tales', 562, 'Fantasy', 1),
    ('The History of Middle-earth', 865, 'Fantasy', 1)
    `;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Books table seeded');
    });
}

// Seed heroes table
const seedHeroesTable = _ => {
    const sql = `INSERT INTO heroes (name, good, image, book_id) VALUES 
    ('Frodo Baggins', 1, 'images/01.jpg', 1),
    ('Samwise Gamgee', 1, 'images/02.jpg', 15),
    ('Gandalf', 1, NULL, 1),
    ('Harry Potter', 0, 'images/03.jpg', 12),
    ('Hermione Granger', 1, 'images/04.jpg', 12),
    ('Ron Weasley', 0, 'images/05.jpg', 2),
    ('Jack Torrance', 0, NULL, 3),
    ('Wendy Torrance', 1, 'images/06.jpg', 6),
    ('Danny Torrance', 0, 'images/07.jpg', 3),
    ('Ned Stark', 1, 'images/08.jpg', 4),
    ('Catelyn Stark', 0, 'images/09.jpg', 7),
    ('Robb Stark', 1, 'images/10.jpg', 8),
    ('Tyrion Lannister', 1, 'images/11.jpg', 5),
    ('Daenerys Targaryen', 1, 'images/12.jpg', 9),
    ('Jon Snow', 1, 'images/13.jpg', 5),
    ('Cersei Lannister', 0, 'images/14.jpg', 10),
    ('Jaime Lannister', 0, 'images/15.jpg', 6)
    `;
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('Heroes table seeded');
    });
}

// Drop all tables
const dropAllTables = _ => {
    dropUsersTable();
    dropHeroesTable();
    dropBooksTable();
    dropAuthorsTable();
};

// Create all tables
const createAllTables = _ => {
    createUsersTable();
    createAuthorsTable();
    createBooksTable();
    createHeroesTable();
};

// Seed all tables
const seedAllTables = _ => {
    seedUsersTable();
    seedAuthorsTable();
    seedBooksTable();
    seedHeroesTable();
};


dropAllTables();
createAllTables();
seedAllTables();


connection.end();