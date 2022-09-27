const mongoose = require('mongoose');
const express = require('express');
require('./config/dbconfig');
const routes = require('./routes/routes')
const app = express();
var bodyParser = require('body-parser');


// let server;

// mongoose.connect("mongodb+srv://priyankagupta43:Priyanka%40123@123%40cluster0.gmxkcno.mongodb.net/?retryWrites=true&w=majority").then(() => {
//   console.log('Connected to MongoDB');
//   server = app.listen(5006, () => {
//     console.log(`Listening to port 5006`);
//   });
// });
// app.configure(function(){
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log("req is === ",req.headers.authorization)
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});





// });
app.use('/v1', routes)
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
// app.use(express.cookieParser());
// app.use(express.session({ secret: "keyboard cat" }));
// app.set('view engine', 'ejs');
// app.set("view options", { layout: true });
//Handles post requests
//Handles put requests
// app.use(express.methodOverride());
const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) {
    server.close();
  }
});

const server = require("http").createServer(app);
server.listen(3001, () => {
  console.log("API server listion on PORT::", 3001);
});