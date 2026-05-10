

const getHomepage = (req, res) => {
    res.render('home.ejs')
}
const getUser = (req, res) => {
    res.render("user.ejs")

}
module.exports = {
    getHomepage, getUser
}