const express = require('express')

const userRouter= express.Router()
const {getUser,createUser} = require('../controller/userController')


userRouter.get('/',getUser)
userRouter.post('/',createUser)



module.exports = userRouter