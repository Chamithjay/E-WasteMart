const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
app.use(cors());

const PORT= 8000;
app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});