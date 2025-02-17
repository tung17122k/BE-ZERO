// const app = express()
const express = require('express')
const { getHomepage, getViews } = require("../controllers/homeController")

const router = express.Router()

router.get("/", getHomepage)

router.get('/views', getViews)

module.exports = router