const { getAllUser } = require("../services/CRUDServices")
const User = require('../models/user')


const getHomepage = async (req, res) => {
    let results = await User.find({});
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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', { user })
}

const postUpdateUser = async (req, res) => {
    let { email, username, city } = req.body;
    let userId = req.body.userId;

    await User.updateOne({ _id: userId }, { email, name: username, city });
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', { user })
}


const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    // await deleteUserById(id);
    let result = await User.deleteOne({ _id: id });
    console.log(result);

    res.redirect("/")
}


module.exports = {
    getHomepage,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}




