const express = require('express');
const router = express.Router();
const home = require('./home');
const form = require('./form');
const analysis = require('./analysis');
const img = require('./img');


router.get('/' , home.get);
router.get('/form' , form.get);
router.post('/analysis' , analysis.post);
router.post('/img' , img.post);
router.post('/sramy' , analysis.post);

module.exports = router;
