const express = require('express');
const app = express();
const router = express.Router();

const Users = require('../models/users.models');
app.use(express.json());

router.post('/', async (req, res) => {
    const users = new Users({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });

    try {
        const response = await users.save();
        res.send(response);
    } catch (err) {
        res.send('Err :' + err.message)
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        res.send(users)
    } catch (err) {
        res.send("Err : " + err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        const response = await user.remove();

        res.json(response);
    } catch (err) {
        res.send('err :', err);
    }
});



router.get('/', (req, res) => {
    res.send('customer get');
    console.log('done');
});

module.exports = router