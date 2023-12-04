// const mongoose = require('mongoose')

// const userSectorSchema = new mongoose.Schema(
//   {
//     Name: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     Sector: {
//       type: mongoose.Schema.Types.Mixed,
//       default: {},
//       required: true
//     },
//     SubSector: {
//       type: mongoose.Schema.Types.Mixed,
//       required: true,
//       default: {}
//     },
//     SubSubSector: {
//       type: mongoose.Schema.Types.Mixed,
//       default: {}
//     },
//     SubSubSubSector: {
//       type: mongoose.Schema.Types.Mixed,
//       default: {}
//     }
//   },
//   { timestamps: true }
// )

// const UserSector = mongoose.model('UserSector', userSectorSchema)

// module.exports = UserSector

const mongoose = require('mongoose')

const userSectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    sector: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
      required: true
    },
    subSector: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: {}
    },
    subSubSector: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    subSubSubSector: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    }
  },
  { timestamps: true }
)

const UserSector = mongoose.model('UserSector', userSectorSchema)

exports.UserSector = UserSector
