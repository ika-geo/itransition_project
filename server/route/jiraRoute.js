const express = require('express')
const jiraController = require("../controller/jiraController");

const router = express.Router()


router.get('/:email', jiraController.getTasksByEmail)

router.post('/', jiraController.createJiraTask)


module.exports = router