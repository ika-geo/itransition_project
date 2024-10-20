const express = require('express')
const filledFormController = require("../controller/filledFormController");

const router = express.Router()




router.post('/', filledFormController.createFilledForm)


module.exports = router