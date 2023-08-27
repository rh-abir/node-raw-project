/**
 * Title: not found Handler
 * Description: 404 not found  Handler
 * author: Rakibul hasan
 * Data :
 * */

// module scaffolding

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(404, {
    message: "your request url was not found",
  });
};

module.exports = handler;
