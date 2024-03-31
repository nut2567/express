const moment = require('moment');

const fs = require('fs');

const logger = (request,response,next) => {
    const message = `${request.protocol}://${request.get('host')}${request.originalUrl} : ${moment().format()}`
    console.log(message);
    fs.appendFile('logSys.txt',message+'\n',(err)=>{
    if(err) {
        throw err;
    }
    next();
})
}


module.exports = logger;