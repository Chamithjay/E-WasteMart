const express = require('express');
const cors= require('cors');
const mongodb = require('mongodb');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});