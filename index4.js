const path = require('path')
const express = require('express')

const app = express();
const publicpath = path.join(__dirname,'public');
console.log(publicpath)

app.use(express.static(publicpath))

app.listen(4500);