const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');


const app = express(); //crerates and instance of an Express applicaton This app object is the main entry point for defining routes, middleware, and application logic.
app.use(cors());
app.use(express.json()); //Adds middleware to parse incoming JSON request bodies. Without this, your application won't understand application/json payloads in HTTP requests.


app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
