const express = require('express')
const formController = require("../controller/formController");
const imageUploadMiddlware = require("../utils/imageUploadMiddlware");

const router = express.Router()


router.get('/', formController.getAllForm)
router.get('/user/:userId', formController.getFormByUserId)
router.get('/:id', formController.getFormById)

router.post('/', imageUploadMiddlware, formController.createForm)

router.put('/:id', imageUploadMiddlware, formController.updateForm)

router.delete('/formField/:id', formController.deleteFormField)
router.delete('/:id', formController.deleteForm)


module.exports = router