// server.js
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Jayavihan@2002',
  database: 'EwasteMart'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});
app.get("/", (req, res) => { 
  console.log("This is base API"); 
  res.send({"Message": 125}); 
}); 

// Sign-up route
app.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Simple validation
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please fill out all fields' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Check if user already exists
  db.query('SELECT email FROM user WHERE Email = ?', [email], async (err, result) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (result.length > 0) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const sql = 'INSERT INTO user (FullName,Email,password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) return res.status(500).json({ message: 'Error saving user' });

      res.status(201).json({ message: 'User registered successfully' });
    });
  });
});

// Server listening on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
