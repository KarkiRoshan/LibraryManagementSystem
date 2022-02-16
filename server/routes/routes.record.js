const express = require('express')
const router = express.Router()

const {insertStudent,getAllRecords,insertBook,insertBorrower} = require('../controllers/controller.record')

router.route('/insertStudent').post(insertStudent)
//router.route('/geStudetnTable').get()
router.route('/insertBook').post(insertBook)
//router.route('/getBook').get()
router.route('/insertBorrower').post(insertBorrower)
//router.route('/getBorrower').get()
router.route('/getAllRecords').get(getAllRecords)


module.exports = router