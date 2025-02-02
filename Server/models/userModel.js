const db = require('../config/db');

// Function to create a new user
const createUser = (name, email, password, callback) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], callback);
};

// Function to find a user by email
const findUserByEmail = (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        callback(err, results);
    });
};

module.exports = { createUser, findUserByEmail };
