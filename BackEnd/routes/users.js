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



router.get('/login', async(req, res) => {
    try {
        console.log('recived');
       let res = await Users.find();
       let response = undefined;
       res.forEach(async (e) => {
         if ((e.email === req.body.email) & (e.password === req.body.password)) {
           response = true;
           console.log('Done');
         }else{
            console.log('Error');
         }
       });
       res.json('response',response);
     } catch (err) {
       res.json({ message: err });
     }
});

module.exports = router