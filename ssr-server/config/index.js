require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV ? false : true,
  port: process.env.PORT || 8000,
  apiUrl: process.env.API_URL,
  ApiKeyToken: process.env.API_KEY_TOKEN
}

module.exports = { config }
