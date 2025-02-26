require('dotenv').config();
const express = require('express');
const connection = require('./config/database');



const configViewEngine = require("./config/viewEngine");
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;


// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data


// config template engine
// config static file
configViewEngine(app);
app.use('/', webRoutes);
// app.use('/v1', webRoutes)



(async () => {
    try {
        // test connection
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> err connect to db", error);
    }
})()



