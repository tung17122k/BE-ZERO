// const app = express()
const express = require('express')
const { getHomepage, getViews, postCreateUser, getCreatePage, getUpdatePage } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomepage)

router.get('/views', getViews)

router.post('/create-user', postCreateUser)

router.get('/create', getCreatePage)

router.get('/update/:id', getUpdatePage)

module.exports = router