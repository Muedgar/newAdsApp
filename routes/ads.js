const express = require('express')
const router = express.Router()

const {
  getAllAds,
  createAd,
} = require('../controllers/ads')

router.route('/').get(getAllAds).post(createAd)

module.exports = router
