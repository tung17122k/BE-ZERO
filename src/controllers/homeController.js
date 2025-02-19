const connection = require('../config/database')


const getHomepage = (req, res) => {
    // connection
    let users = [];

    connection.query('select * from Users u',
        function (err, results, fields) {
            console.log(">>>>check results", results);
            users = results;
            console.log(">>>>check users", users);
            res.send(JSON.stringify(users));
        }
    )
}

const getViews = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getViews
}