require('dotenv').config();

console.log(`TEST_DB_URL: ${process.env.TEST_DB_URL}`);
console.log(`process.env.NODE_ENV: ${process.env.NODE_ENV}`);

const PORT = process.env.PORT;
const DB_URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_DB_URL
  : process.env.DB_URL;

module.exports = {
  DB_URL,
  PORT
}