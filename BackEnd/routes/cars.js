const express = require('express');
const app = express();
const router = express.Router();

const Cars = require('../models/cars.models');

app.use(express.json());

router.get('/', async (req, res) => {
    try {
        const cars = await Cars.find();
        res.send(cars)
    } catch (err) {
        res.send("Err : " + err)
    }
});

router.post('/', async (req, res) => {
    const cars = new Cars({
        regNo: req.body.regNo,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });

    try {
        const response = await cars.save();
        res.send(response);
    } catch (err) {
        res.send('Err :' + err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const car = await Cars.findById(req.params.id);
        car.regNo = req.body.regNo
        car.description = req.body.description
        car.price = req.body.price
        car.image = req.body.image

        const response = await car.save();
        res.json(response);
    } catch (err) {
        res.send('Err : ', err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const car = await Cars.findById(req.params.id);
        const response = await car.remove()

        res.json(response);
    } catch (err) {
        res.send('err :', err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const car = await Cars.findById(req.params.id)
        res.json(car);
    } catch (err) {
        res.send('Err :', err)
    }
})

module.exports = router;