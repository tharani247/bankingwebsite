const express = require('express');
const router = express.Router();
const usertransfer = require('../controllers/usertransfer');

router.route('/').get(usertransfer.fetchData);

module.exports = router;
