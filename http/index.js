// TODO: http module in node. This is in-build module.

const http = require("http");
const fs = require("fs");
const url = require("url");

// TODO: Creating server in node
// TODO: http.createServer => The help of this keyword to create server. or in createServer keyword take one collback function. this collback function has two parameters (1) request and (2) response .

const myServer = http.createServer((req, res) => {
  //   console.log("New request recoarded.");

  // TODO: headers => means information of request user.and if you want to see req info so console.log(req)
  //   console.log(req.headers);

  const log = `${Date.now()}: ${req.url} New Record Received\n`;
  // TODO: url.parse => means url full information ex-> path,protocol, query etc
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);

  fs.appendFile("./http/log.txt", log, (error, data) => {
    // res.end("Hello form server"); // res.end means the server last response is => hello form server
    switch (myUrl.pathname) {
      case "/":
        res.end("This is Home Page!");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      default:
        res.end("404 Not Found");
    }
  });
});

// TODO: listen :- means server start on 8000 port number
myServer.listen(8000, () => console.log("Server Started!"));
