
const indexController = {

    index: (req, res) => {
        res.render("index")
    },
    aboutMe: (req, res) => {
        res.render("aboutMe")
    },

    proyectos: (req, res) => {
        res.render("proyectos")
    },

}

module.exports = indexController;