'use strict';

const express = require('express');
const router = express.Router();
const UserController = require('./user.controller');

const controller = new UserController();

router.get('/', controller.showAll);
router.get('/:id', controller.show);
router.post('/', controller.add);
router.delete('/:id', controller.remove);
router.get('/check/health', controller.health);
router.all('*', (req, res, next) => {return res.status(501).json({error:'Please check your URL'});});

module.exports = router;