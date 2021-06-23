const express = require('express')
let bodyParser = require('body-parser')
const app = express()

//helpers
app.use(bodyParser.json())

//router
app.use('/api/home',require('./components/home'))
app.use('/api/auth',require('./components/auth'))

//listener
app.listen(5500)