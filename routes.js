/**
 * Title: Routes
 * Description: Application Routes
 * author: Rakibul hasan
 * Data : 
 * */ 

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')


const routes = {
    "sample": sampleHandler,
    "about": sampleHandler,
}

module.exports = routes;