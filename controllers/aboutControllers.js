const path = require('path')
const controladorAbout = {
    about: (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../views/about.html'))
    }
}

module.exports = controladorAbout