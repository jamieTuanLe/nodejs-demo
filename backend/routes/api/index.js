const express = require('express')
const mainRouter = express.Router()

mainRouter.use('/', require('./home'))
mainRouter.use('/user', require('./user'))

module.exports = mainRouter