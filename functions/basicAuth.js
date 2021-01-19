const app = require('express')()
const basicAuth = require('express-basic-auth')
 
app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

module.exports = app;