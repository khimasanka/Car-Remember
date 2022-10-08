const express = require('express');
const user = require('./routes/users');
const cars = require('./routes/cars');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/user', user);
app.use('/car', cars);

app.get('/', (req, res) => {
    console.log(req.query.id);
    res.send("Done");
});

app.listen(port, () => {
    console.log('runnig on port', port);
});