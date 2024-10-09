const express = require('express')

const authRouter = require("./authRoute")
const userRouter = require('./userRoute')


const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)


module.exports = router