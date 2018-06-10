const express = require('express');
const router = express.Router();
const home = require('./home');
const form = require('./form');


router.get('/' , home.get);
router.get('/form' , form.get);

module.exports = router;
