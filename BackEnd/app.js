const express = require('express');
const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log('====================================');
    console.log('runnig on port',port);
    console.log('====================================');
})