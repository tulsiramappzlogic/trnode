// const { rejects } = require("assert");
// const { resolve } = require("path");
// const { promiseHooks } = require("v8");

let a = 10, b = 0;

let wait = new Promise((resolve, rejects) => {

    setTimeout(() => {
        resolve(30);
        
    }, 5000);
});

wait.then((b) => console.log(a + b));
