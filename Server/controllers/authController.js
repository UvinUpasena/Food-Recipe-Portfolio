const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    console.log('Data Received',{name,email,password});

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    findUserByEmail(email, async (err, result) => {
        if (err){
            console.error(err); 
            return res.status(500).json({ message: err.message });
        }
            if (result.length > 0) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        createUser(name, email, hashedPassword, (err) => {
            if (err) return res.status(500).json({ message: err.message });
            res.status(201).json({ message: 'User registered successfully' });
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    findUserByEmail(email, async (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' });
        res.json({ token, message: 'Login successful' });
    });
};

module.exports = { register, login };
