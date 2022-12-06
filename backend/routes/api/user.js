const express = require('express')
const router = express.Router()
const listData = require('../../data/userInfo')

router.get('/', (req, res) => {
  res.json(listData)
})

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.json(listData.find(user => user.id === id))
})

module.exports = router;