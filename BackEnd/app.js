const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/users');
const cars = require('./routes/cars');

const app = express();
const port = 4000;

const url = 'mongodb://127.0.0.1/express';

mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on("open", () => {
    console.log("MongoDB Connected...!")
});

app.use(express.json());
app.use('/user', user);
app.use('/car', cars);

app.listen(port, () => {
    console.log('runnig on port', port); 
});