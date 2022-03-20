const Ad = require('../models/Ad')
const asyncWrapper = require('../middleware/async')
//const { createCustomError } = require('../errors/custom-error')
const getAllAds = asyncWrapper(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const ads = await Ad.find({})
  res.status(200).json({ ads })
})
const createAd = asyncWrapper(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
    const ad = await Ad.create(req.body)
    res.status(201).json({ ad, status: "created successfully" })
  })

  module.exports = {
    getAllAds,
    createAd,
  }
  