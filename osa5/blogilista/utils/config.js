/* eslint-disable prefer-const */
require('dotenv').config()

let { PORT, MONGODB_URI, SECRET } = process.env

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'dev') {
  MONGODB_URI = process.env.DEV_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
}
