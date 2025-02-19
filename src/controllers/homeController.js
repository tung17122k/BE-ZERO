const connection = require('../config/database')
const express = require('express')
const app = express()


const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getViews = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = (req, res) => {


    // console.log(email, username, city);
    let { email, username, city } = req.body

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES(?,?,?); `,
        [email, username, city], function (err, results) {
            console.log(results);
            res.send("create user success");
        }
    );






}

module.exports = {
    getHomepage,
    getViews,
    postCreateUser
}