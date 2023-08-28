/**
 * Title: Environments
 * Description: handle all environment related things
 * author: Rakibul hasan
 * */
// dependencies

// module scaffolding

const enviroments = {}

enviroments.staging = {
    port: 3000,
    evnName: 'staging',
}

enviroments.production = {
    port: 5000,
    evnName: 'production',
}

// determine which environment war passed

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object 

const environmentToExport = typeof(enviroments[currentEnvironment]) === "object" ? enviroments[currentEnvironment] : enviroments.staging;


//export module
module.exports = environmentToExport;

