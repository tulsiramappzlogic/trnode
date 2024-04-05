const http = require("http");

const dataControl = (req,res)=>{

    res.write('Hello , How are you fine');
    res.end();
}

http.createServer(dataControl).listen(4500);


