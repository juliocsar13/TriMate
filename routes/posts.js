const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const multer = require('multer'); // v1.0.5
const upload = multer();

router.route('/',upload.array())
    .get(postController.index)
    .post(postController.create);

module.exports = router;
