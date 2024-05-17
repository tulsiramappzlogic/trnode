const express = require('express')
const app =express();

app.get('',(req,res) =>{
    res.send('This is index page')
});

app.get('/about',(req,res) =>{
    res.send('This is about page')
});

app.get('/help',(req,res) =>{
    res.send('This is help page now '+req.query.name)
   
});

app.listen(4500);