const { getAllUser } = require("../services/CRUDServices")
const User = require('../models/user')


const getHomepage = async (req, res) => {
    let results = [];
    // console.log('results', results);

    return res.render('home.ejs', { data: results })
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {

    let { email, username, city } = req.body
    // let [results, fields] = await connection.query(`INSERT INTO Users (email, name, city) VALUES(?,?,?)`, [email, username, city],);

    await User.create({ email, name: username, city })


    res.send("create user success");
}



module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage
}




