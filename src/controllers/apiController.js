const User = require('../models/user')


const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({ data: results, errorCode: 0 })
}

const postCreateUser = async (req, res) => {
    let { email, username, city } = req.body
    let user = await User.create({ email, name: username, city })
    return res.status(200).json({ data: user, errorCode: 0 })
}

const putUpdateUser = async (req, res) => {
    let { email, username, city } = req.body;
    let userId = req.body.userId;
    let user = await User.updateOne({ _id: userId }, { email, name: username, city });
    return res.status(200).json({ data: user, errorCode: 0 })
}

const deleteUserApi = async (req, res) => {
    const id = req.body.userId;
    // await deleteUserById(id);
    let result = await User.deleteOne({ _id: id });
    return res.status(200).json({ data: result, errorCode: 0 })

}

module.exports = { getUsersAPI, postCreateUser, putUpdateUser, deleteUserApi }