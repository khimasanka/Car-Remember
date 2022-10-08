const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    regNo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Cars', carSchema);