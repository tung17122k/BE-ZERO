const connection = require('../config/database')

const getAllUser = async () => {
    let [results, fields] = await connection.query('select * from Users u');
    return results
}


const getUserById = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);
    let user = results && results.length > 0 ? results[0] : {};
    return user
}

const updateUserById = async (email, city, username, userId) => {
    let [results, fields] = await connection.query(`UPDATE Users SET email = ?, city = ?, name = ? WHERE id = ?`, [email, city, username, userId],);
}

module.exports = {
    getAllUser,
    getUserById,
    updateUserById
}