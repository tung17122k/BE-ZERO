require('dotenv').config();
const express = require('express');
const connection = require('./config/database');
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');


const configViewEngine = require("./config/viewEngine");
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// default options config file upload
app.use(fileUpload());


// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data


// config template engine
// config static file
configViewEngine(app);
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);
// app.use('/v1', webRoutes)


(async () => {
    try {
        // test connection

        // await connection();

        // using mongodb driver
        const url = process.env.DB_HOST_WITH_DRIVER;
        const client = new MongoClient(url);
        // db name
        const dbName = process.env.DB_NAME;

        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('customers');
        await collection.insertOne({
            name: "test",
            email: "test@gmail.com",
            address: "Ha Noi",
            phone: "0392293758"
        });
        let a = await collection.findOne({ name: "test" });
        console.log(">>>check a", a);



        app.listen(port, hostname, () => {
            console.log(`Backend app listening on port ${port}`)
        })
    } catch (error) {
        console.log(">>>> err connect to db", error);
    }
})()



