const { config } = require('dotenv');

config();

module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    SECRET: process.env.SECRET,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    JWT_REFRESK_EXPIRATION: process.env.JWT_REFRESK_EXPIRATION
};