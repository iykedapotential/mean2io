var dotenv = require('dotenv');
if(process.env.NODE_ENV !== 'production' || process.env.NODE_ENV !== 'staging'){
    dotenv.load({path:'.env'});
}

module.exports = {
    db_uri: process.env.MONGOLAB_URI,
    env: process.env.NODE_ENV,
    session_secret: process.env.SESSION_SECRET
}