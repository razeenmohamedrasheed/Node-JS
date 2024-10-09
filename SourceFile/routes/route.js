'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../Controller/controller')

router.get('/user',controller.getUserData)


module.exports  = router