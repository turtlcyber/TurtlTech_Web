const dotenv = require("dotenv");

// getting all ENV variables before starting another processes
dotenv.config();

module.exports = {
  secretKey: process.env.SECRET_KEY,
  mongoDbUrl: process.env.MONGO_DB_URI,
  tokenSecretKey: process.env.TOKEN_SECRET_KEY,
  port: process.env.PORT,
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
  firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: process.env.FIREBASE_APP_ID,
};
