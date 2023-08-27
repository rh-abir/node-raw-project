/**
 * Title: sample Handler
 * Description: sample Handler
 * author: Rakibul hasan
 * Data : 
 * */ 

// module scaffolding

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties)
    callback(200, {
        message: "This is sample Url "
    })
}

module.exports = handler;