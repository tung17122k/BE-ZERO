// const app = express()
const express = require('express')

const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/views', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router