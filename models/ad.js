const mongoose = require('mongoose')

const AdSchema = new mongoose.Schema({
  campain: {
    type: String,
    required: [true, 'must provide campain name'],
    trim: true,
    maxlength: [100, 'campain name can not be more than 100 characters'],
  },
  website: {
    type: String,
    required: [true, 'must provide campain website url'],
    trim: true,
    maxlength: [1000, 'website url can not be more than 100 characters'],
  },
  logo: {
    type: String,
    required: [true, 'must provide logo url'],
    trim: true,
    maxlength: [1000, 'logo url can not be more than 100 characters'],
  },
})

module.exports = mongoose.model('Ad', AdSchema)
