const express = require('express');
const app = express();

const port = 4000;

app.use(express.json());

app.get('/login', (req,res) =>{
    res.send('dons');
    console.log(req.body.user);
});

app.listen(port,(req,res)=>{
    console.log("done");
})

