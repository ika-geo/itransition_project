const express = require('express')

const authRouter = require("./authRoute")


const router = express.Router()

router.use('/auth', authRouter)


module.exports = router