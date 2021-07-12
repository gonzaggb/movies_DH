const { Genre } = require('../database/models')


module.exports = (req, res, next) => {
    Genre.findAll()
        .then(resultado => {
            res.locals.moviesGenres = resultado
            next()
        })

}