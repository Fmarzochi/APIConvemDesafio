const express = require('express')
const router = express.Router()
const { transactions } = require('../handlers')

router.post('/api/transactions', transactions.create)
router.get('/api/transactions', transactions.get)

module.exports = router