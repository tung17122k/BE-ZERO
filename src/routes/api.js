
const express = require('express')
const { getUsersAPI, postCreateUser, putUpdateUser, deleteUserApi, postUploadSinglefileApi, postUploadMultiplefileApi, } = require('../controllers/apiController')

const { postCreateCustomer, postCreateArrayCustomer, getCreateCustomer, putUpdateCustomer, deleteACustomer, deleteArrayCustomer } = require('../controllers/customerController')

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

routerAPI.get("/customers", getCreateCustomer)

routerAPI.put("/customers", putUpdateCustomer)

routerAPI.delete("/customers", deleteACustomer)

routerAPI.delete("/customers-many", deleteArrayCustomer)

module.exports = routerAPI