const connection = require('../config/database')
const express = require('express')
const app = express()
const { getAllUser, getUserById, updateUserById } = require("../services/CRUDServices")


const getHomepage = async (req, res) => {
    let results = await getAllUser();
    // console.log('results', results);

    return res.render('home.ejs', { data: results })
}

const getViews = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    // console.log(email, username, city);
    let { email, username, city } = req.body
    let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES(?,?,?)`, [email, username, city],);
    // console.log("check results", results);
    res.send("create user success");

}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId)
    res.render('edit.ejs', { user })
}

const postUpdateUser = async (req, res) => {
    let { email, username, city } = req.body;
    let userId = req.body.userId;
    await updateUserById(email, city, username, userId)
    // res.send("update user success");
    res.redirect("/v1")
}


module.exports = {
    getHomepage,
    getViews,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}