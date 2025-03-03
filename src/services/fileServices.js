
const path = require('path');

const uploadSingle = async (fileObject) => {
    let uploadPath = path.join(__dirname, '..', '/public/images/', fileObject.name);
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);

        return {
            status: 'success',
            path: uploadPath,
            error: null
        }
    } catch (error) {
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(error)
        }
    }
}

const uploadMultiple = async (files) => {

}

module.exports = { uploadSingle, uploadMultiple }