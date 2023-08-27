/**
 * Title: Handle request response
 * Description: handle request and response
 * author: Rakibul hasan
 * */ 
// dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler')

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling 
    // get the url and parse it
  
    // parse the url
    const parsedUrl = url.parse(req.url, true);
  
    // get the path name
    const path = parsedUrl.pathname;
  
    // trim the path
    const trimmePath = path.replace(/^\/+|\/+$/g, "");
  
    // get the method make small words
    const method = req.method.toLowerCase();
  
    // get the query string object
    const queryStringObject = parsedUrl.query;
  
    // get the request headers
    const headersObject = req.headers;
  
    const requestProperties = {
        parsedUrl,
        path,
        trimmePath,
        method,
        queryStringObject,
        headersObject
    }


   // get the request body data 
    const decoder = new StringDecoder("utf-8");
    let realData = "";
    
    const chosenHandler = routes[trimmePath] ? routes[trimmePath] : notFoundHandler; 
    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof(statusCode) === "number" ? statusCode : 500;
        payload = typeof(payload) === "object"? payload : {};
        
        const payloadString = JSON.stringify(payload);

        // return the final reponse 
        res.writeHead(statusCode);
        res.end(payloadString);

    })

    req.on("data", (buffer) => {
      realData += decoder.write(buffer);
    });
  
    req.on("end", () => {
      realData += decoder.end();
      console.log(realData);
      // response handlers
      res.end("Hello programmars ");
    });
  };
  

module.exports = handler;