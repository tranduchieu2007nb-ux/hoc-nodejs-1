const express = require('express');
const { getHomepage, getUser } = require('../controllers/homecontrollers');
const router = express.Router();


//router
router.get('/', getHomepage);

router.get('/user', getUser);

module.exports = router;