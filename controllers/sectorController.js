const axios = require('axios')
const dotenv = require('dotenv')

const { Sector } = require('../Models/Sector')
const { SubSector } = require('../Models/SubSector')
const { UserSector } = require('../Models/UserSector')

// load config
dotenv.config()

exports.addSector = async (req, res) => {
  const { sectorName, hasSubSector } = req.body

  try {
    const sectorExists = await Sector.findOne({ sectorName })

    if (sectorExists) {
      return res.status(400).json({ error: 'Sector with the name exists' })
    }

    await Sector.create({
      sectorName,
      hasSubSector
    })

    res.status(200).json({ msg: 'Sector added successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.addSubSector = async (req, res) => {
  const { parentId, subSectorName, subSectorType, hasSubSector } = req.body

  try {
    const subSectorExists = await SubSector.findOne({ subSectorName })

    if (subSectorExists) {
      return res.status(400).json({ error: 'Sub-sector with the name exists' })
    }

    const newSubSector = await SubSector.create({
      parentId,
      subSectorName,
      subSectorType,
      hasSubSector
    })

    res.status(200).json({
      msg: 'Sub-sector added successfully',
      newSubSector
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.getSectors = async (req, res) => {
  try {
    const sectors = await Sector.find({})

    res.status(200).json({
      msg: 'Sectors fetched successfully',
      sectors
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.getSubSectors = async (req, res) => {
  const { parentId } = req.params

  try {
    const subSectors = await SubSector.find({ parentId })

    res.status(200).json({
      msg: 'Sub sectors fetched successfully',
      subSectors
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.addUserSector = async (req, res) => {
  const { name, sector, subSector, subSubSector, subSubSubSector } = req.body

  try {
    const nameExists = await UserSector.findOne({ name })

    if (nameExists) {
      return res.status(400).json({ error: 'User with name already exist' })
    }

    const newUser = await UserSector.create({
      name,
      sector,
      subSector,
      subSubSector,
      subSubSubSector
    })

    res.status(201).json({
      msg: 'User sector added successfully',
      newUser
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.editUserSector = async (req, res) => {
  const { id } = req.params
  const { name, sector, subSector, subSubSector, subSubSubSector } = req.body

  try {
    const userSectorExists = await UserSector.findById(id)

    if (!userSectorExists) {
      return res.status(400).json({ error: 'User sector does not exist' })
    }

    await UserSector.findOneAndUpdate(
      { _id: id },
      {
        name,
        sector,
        subSector,
        subSubSector,
        subSubSubSector
      }
    )

    res.status(201).json({
      msg: 'User sector edited successfully'
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.getUserSectors = async (req, res) => {
  try {
    const userSectors = await UserSector.find({})

    res.status(200).json({
      msg: 'User sectors fetched successfully',
      userSectors
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}

exports.getUserSector = async (req, res) => {
  const { id } = req.params

  try {
    const userSector = await UserSector.findById(id)

    res.status(200).json({
      msg: 'User sectors fetched successfully',
      userSector
    })
  } catch (error) {
    res.status(500).json({ error: 'Server error , please try again' })
  }
}
