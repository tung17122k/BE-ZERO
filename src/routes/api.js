
const express = require('express')
const { getUsersAPI, postCreateUser, putUpdateUser, deleteUserApi, postUploadSinglefileApi } = require('../controllers/apiController')


const routerAPI = express.Router()

routerAPI.get("/", (req, res) => {
    res.send("API is running")
})

routerAPI.get("/users", getUsersAPI)

routerAPI.post("/users", postCreateUser)

routerAPI.put("/users", putUpdateUser)

routerAPI.delete("/users", deleteUserApi)

routerAPI.post("/file", postUploadSinglefileApi)


module.exports = routerAPI