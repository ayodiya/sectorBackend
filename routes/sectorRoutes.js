const express = require('express')

const router = express.Router()

const {
  addSector,
  addSubSector,
  getSectors,
  getSubSectors,
  addUserSector,
  getUserSectors,
  getUserSector,
  editUserSector
} = require('../controllers/sectorController')

router.post('/add-sector', addSector)
router.post('/add-subSector', addSubSector)
router.post('/add-user-sector', addUserSector)
router.put('/edit-user-sector/:id', editUserSector)
router.get('/sectors', getSectors)
router.get('/sub-sectors/:parentId', getSubSectors)
router.get('/user-sectors', getUserSectors)
router.get('/user-sector/:id', getUserSector)

module.exports = router
