// routes/user-routes.js
const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.get('/:id', userController.getStudentById);

module.exports = router;