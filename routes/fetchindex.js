const express = require('express');
const router = express.Router();

router.route('/').render('../views/pages/index');

module.exports = router;
