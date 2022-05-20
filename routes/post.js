const express = require('express')
const router = express.Router()

//import controller methods
const {create}= require('../controllers/postController')

//end-points or routes
router.post('/post', create);

module.exports = router;