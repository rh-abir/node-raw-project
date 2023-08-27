/**
 * Title : Uptime - Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Rakibul hasan
 * date: 27/08/23
 *
 * */

//dependencies
const http = require("http");


const {handleReqRes} = require('./helpers/handleReqRes')

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};
// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

// handle Requests response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
