// const app = require("./app");
const express = require("express");
const app = express();
const reqFilter = (req, resp, next) => {
  if (!req.query.age) resp.send("Age is require for homepage");
  else if (req.query.age < 18) resp.send("Age is work");
  else next();
};

// app.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("homepage");
});

app.get("/users", reqFilter,(req, resp) => {
  resp.send("homepage");
}); 

app.listen(4500);
