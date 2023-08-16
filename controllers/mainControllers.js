const path = require('path')
const controladorMain = {
    home: (req, res) =>{
        res.sendFile(path.resolve(__dirname, '../views/home.html'))
    }
}

module.exports = controladorMain