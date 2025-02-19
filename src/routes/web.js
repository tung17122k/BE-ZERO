// const app = express()
const express = require('express')
const { getHomepage, getViews, postCreateUser } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomepage)

router.get('/views', getViews)

router.post('/create-user', postCreateUser)

module.exports = router