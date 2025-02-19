require('dotenv').config()
const express = require('express')
const connection = require('./config/database')



const configViewEngine = require("./config/viewEngine")
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data


// config template engine
// config static file
configViewEngine(app);
app.use('/v1', webRoutes)
// app.use('/v1', webRoutes)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})