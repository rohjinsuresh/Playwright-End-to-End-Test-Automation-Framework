// Load environment variables
require('dotenv').config()

// Export environment variables
module.exports = {

    BASE_URL: process.env.BASE_URL || "https://www.saucedemo.com",

    API_URL: process.env.API_URL || "https://reqres.in/api"

}