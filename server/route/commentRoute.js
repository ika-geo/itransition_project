const express = require('express')
const commentController = require("../controller/commentController");

const router = express.Router()


router.get('/', commentController.getAllComments)
router.delete('/:id', commentController.deleteComment)


module.exports = router