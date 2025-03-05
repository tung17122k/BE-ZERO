
const express = require('express')
const { getUsersAPI, postCreateUser, putUpdateUser, deleteUserApi, postUploadSinglefileApi, postUploadMultiplefileApi, } = require('../controllers/apiController')

const { postCreateCustomer, postCreateArrayCustomer, getAllCustomer, putUpdateCustomer, deleteACustomer, deleteArrayCustomer } = require('../controllers/customerController')

const routerAPI = express.Router()

routerAPI.get("/", (req, res) => {
    res.send("API is running")
})

routerAPI.get("/users", getUsersAPI)

routerAPI.post("/users", postCreateUser)

routerAPI.put("/users", putUpdateUser)

routerAPI.delete("/users", deleteUserApi)

routerAPI.post("/file", postUploadSinglefileApi)

routerAPI.post("/files", postUploadMultiplefileApi)

routerAPI.post("/customers", postCreateCustomer)

routerAPI.post("/customers-many", postCreateArrayCustomer)

routerAPI.get("/customers", getAllCustomer)

routerAPI.put("/customers", putUpdateCustomer)

routerAPI.delete("/customers", deleteACustomer)

routerAPI.delete("/customers-many", deleteArrayCustomer)

routerAPI.get("/info", (req, res) => {
    console.log(">>>check req.query", req.query);

    return res.status(200).json({
        data: req.query
    })
})

routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>>check req.query", req.params);

    return res.status(200).json({
        data: req.params
    })
})

module.exports = routerAPI