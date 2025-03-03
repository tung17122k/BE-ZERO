const User = require('../models/user')

const { uploadSingle, uploadMultiple } = require('../services/fileServices')


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

const postUploadSinglefileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    let result = await uploadSingle(req.files.image);

    return res.send("ok upload file")
}


const postUploadMultiplefileApi = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    uploadedFiles = req.files.image;
    let filesArray = Array.isArray(uploadedFiles) ? uploadedFiles : [uploadedFiles]

    let results = await uploadMultiple(filesArray);
    // console.log(">>>check result", results);
    return res.send("ok uploaded multiple file")
}

module.exports = { getUsersAPI, postCreateUser, putUpdateUser, deleteUserApi, postUploadSinglefileApi, postUploadMultiplefileApi }