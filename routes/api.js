const express = require('express')
const router = express.Router()
const userEndPoint = require('./user/user')

router.use('/user',userEndPoint)

module.exports = router
