
const express = require('express')

const { getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomepage)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/create-user', postCreateUser)

router.post('/update-user', postUpdateUser)



module.exports = router