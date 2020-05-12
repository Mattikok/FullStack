/* eslint-disable prefer-const */
require('dotenv').config()

let { PORT, MONGODB_URI } = process.env

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
  console.log('testi uri');
}

module.exports = {
  MONGODB_URI,
  PORT,
}
