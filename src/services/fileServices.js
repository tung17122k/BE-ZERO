
const path = require('path');

const uploadSingle = async (fileObject) => {
    // ext => jpg, png, gif, baseName => fileName => finalName => baseName + '-' + Date.now() + extName
    let extName = path.extname(fileObject.name);
    let baseName = path.basename(fileObject.name, extName);
    let finalName = baseName + '-' + Date.now() + extName;
    // console.log("extName", extName);
    let uploadPath = path.join(__dirname, '..', '/public/images/upload/', finalName);
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

const uploadMultiple = async (uploadedFiles) => {
    let results = [];
    for (let i = 0; i < uploadedFiles.length; i++) {
        let result = await uploadSingle(uploadedFiles[i]);
        results.push(result);
    }
    return results;
}
module.exports = { uploadSingle, uploadMultiple }