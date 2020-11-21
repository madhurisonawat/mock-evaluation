const express = require('express')

const router = express.Router()

const {  getTeachers, addTeachers, teacherDetails, removeTeacher, updateTeacher } = require('../controllers/teachers')
const { register, login } = require('../controllers/auth')

router.post('/login', login)
router.post('/register', register)
router.post('/addTeacher', addTeachers)
router.get('/getTeacher', getTeachers)
router.get('/teacher', teacherDetails)
router.post('/updateTeacher/:id', updateTeacher)
router.delete('/removeTeacher/:id', removeTeacher)

module.exports = router