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
const environment = require('./helpers/envvironments')
const data = require('./lib//data')


// app object - module scaffolding
const app = {};

// testing file system
// @TOTO: pore muche dibo 

data.delete('test', 'newFile', (err) => {
  console.log(err);
})




// create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port}`);
  });
};

// handle Requests response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
