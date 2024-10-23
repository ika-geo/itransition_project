const express = require('express')
require('../schema/associations.js')

const authRouter = require("./authRoute")
const userRouter = require('./userRoute')
const formRouter = require('./formRoute')
const tagRouter = require('./tagRoute')
const topicRouter = require('./topicRoute')
const filledFormRouter = require('./filledFormRoute')
const commentRouter = require('./commentRoute')

const router = express.Router()

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/forms', formRouter)
router.use('/tags', tagRouter)
router.use('/topics', topicRouter)
router.use('/filledForm', filledFormRouter)
router.use('/comments', commentRouter)


module.exports = router