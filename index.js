// const app = require("./app");
// let a = 10;
// let b = 20;
// let c = 30;

// console.log(app.c());


const fs = require('fs');
// fs.writeFileSync('a1.txt','code step by step')

const data = fs.readFileSync('a1.txt','utf8')
console.log(data)