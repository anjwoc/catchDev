const express = require('express');
const sns = require('../controllers/sns');
const { isLoggedIn, isNotLoggedIn, uploadProfileImage } = require('./middlewares');

const router = express.Router();

router.post('/user/:id', sns.addSns);


module.exports = router