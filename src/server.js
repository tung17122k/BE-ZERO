require('dotenv').config()
const express = require('express')
const connection = require('./config/database')



const configViewEngine = require("./config/viewEngine")
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;



// config template engine
// config static file
configViewEngine(app);
app.use('/v1', webRoutes)
// app.use('/v1', webRoutes)


// test connection
connection.query('select * from Users u',
    function (err, results, fields) {
        console.log(">>>>check results", results);

    }
)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})