require('dotenv').config();

console.log(process.env.DB_URL ? 'DB_URL ok' : 'DB_URL not ok');

const PORT = process.env.PORT;
const DB_URL = process.env.NODE_ENV === 'test'
  ? process.env.TEST_DB_URL
  : process.env.DB_URL;

module.exports = {
  DB_URL,
  PORT
}