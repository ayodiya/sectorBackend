const mongoose = require('mongoose')

const sectorSchema = new mongoose.Schema(
  {
    sectorName: {
      type: String,
      required: true,
      trim: true
    },
    hasSubSector: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

const Sector = mongoose.model('Sector', sectorSchema)

exports.Sector = Sector
