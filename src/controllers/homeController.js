
const getHomepage = (req, res) => {
    res.send("hello world!!!")
}

const getViews = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getViews
}