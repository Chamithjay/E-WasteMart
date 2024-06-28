const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
app.use(cors());

const port= 3000;
app.listen(3000, () => {
    console.log('Server is running on port: ' + port);
});