
// TODO: In express no need to  handle url and http 

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello, This is home page!");
});

app.get("/about", (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// app.get("/about", (req, res) => {
//   return res.send(
//     "This is about page" +
//       " hey" +
//       req.query.name +
//       "Your age is " +
//       req.query.age
//   );
// });

app.listen(3000, ()=>console.log('Express server is started'))
