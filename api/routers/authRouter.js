const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

module.exports = router;
const db = require('../../database/helpers/authModel.js');
const ware = require('../middleware.js');

// router.post('/login', login);
// router.post('/register', register);
router.get('/users', getUsers);
router.get('/users/:id', getUsers);


async function getUsers(req, res) {
    const id = req.params.id;
    const users = await db.get(id);
    try {
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json(err)
    }
}