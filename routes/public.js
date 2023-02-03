const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get('/test', (req, res) => {
    const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
    res.send(`<h1>Hello World!!! from ${environment}<h1>`);
});

router.post('/register-inquiry', UserController.registerInquiry);

module.exports = router
