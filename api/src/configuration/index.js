
module.exports.port = process.env.PORT; // Read env from docker-compose.yml
module.exports.host = process.env.HOST; // Read env from docker-compose.yml
module.exports.db = process.env.MONGO_URL;
module.exports.authApiUrl = process.env.AUTH_API_URL;