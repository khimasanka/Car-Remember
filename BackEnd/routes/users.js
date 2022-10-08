const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('customer get');
    console.log('done');
});

module.exports = router