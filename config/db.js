const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)

    console.log('MongoDB is Connected...')
  } catch (err) {
    process.exit(1)
  }
}

module.exports = connectDB
