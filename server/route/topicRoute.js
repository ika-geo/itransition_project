const express = require('express')
const topicController = require("../controller/TopicController");
const router = express.Router()

router.get('/', topicController.getAllTopics)

module.exports = router