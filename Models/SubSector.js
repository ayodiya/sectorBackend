const mongoose = require('mongoose')

const subSectorSchema = new mongoose.Schema(
  {
    parentId: {
      type: String,
      required: true
    },
    subSectorName: {
      type: String,
      required: true,
      trim: true
    },
    subSectorType: {
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

const SubSector = mongoose.model('SubSector', subSectorSchema)

exports.SubSector = SubSector
