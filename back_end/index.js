const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jayavihan@2002', // add your MySQL password here
    database: 'ewastemart'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Sign-up API
app.post('/signup', (req, res) => {
    const { fullName, email, password } = req.body;

    const sql = 'INSERT INTO user (FullName,Email,password) VALUES (?, ?, ?)';
    db.query(sql, [fullName, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            res.status(500).send('Server error');
        } else {
            console.log("Succesfully Registered");
            res.sendStatus(201);
        }
    });
});

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM user WHERE Email = ? AND password = ?';
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Error logging in:', err);
            res.status(500).send('Server error');
        } else {
            if (result.length > 0) {
                res.sendStatus(201);
            } else {
                res.status(401).send('Invalid email or password');
            }
        }
    });
});
// Add product API
app.post('/product', (req, res) => {
    const { title, description, Status, quantity, rating, price, image } = req.body;

    const sql = 'INSERT INTO product (product_title, product_description, product_status, quantity, images, price, product_rating) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, description, Status, quantity, image, price, rating], (err, result) => {
        if (err) {
            console.error('Error inserting product:', err);
            res.status(500).send('Server error');
        } else {
            res.sendStatus(201);
        }
    });
});
// Define an API route to fetch products
app.get('product', (req, res) => {
    const query = 'SELECT * FROM product'; // Modify this to your table structure
    db.query(query, (err, result) => {
        if (err) {
            console.log('Error fetching products:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(result); // Send the product data as a JSON response
    });
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
