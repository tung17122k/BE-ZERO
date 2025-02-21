// const app = express()
const express = require('express')
const { getHomepage, getViews, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomepage)

router.get('/views', getViews)

router.post('/create-user', postCreateUser)


router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

router.post('/update-user', postUpdateUser)

module.exports = router