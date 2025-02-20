const connection = require('../config/database')
const express = require('express')
const app = express()
const { getAllUser } = require("../services/CRUDServices")


const getHomepage = async (req, res) => {
    let results = await getAllUser();
    console.log('results', results);

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

module.exports = {
    getHomepage,
    getViews,
    postCreateUser,
    getCreatePage
}