const express = require('express');
const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, postUser, loginUser, getUser, patchUser, deleteUser } = require('./_controllers');

const router = express.Router();

router.post('/users/login', loginUser);
router.post('/users', isLoggedIn, postUser);
router.get('/users', isLoggedIn, getUsers);
router.get('/users/:id', isLoggedIn, getUser);
router.patch('/users/:id', isLoggedIn, patchUser);
router.delete('/users/:id', isLoggedIn, hasRole(['admin']), deleteUser);

module.exports = router;