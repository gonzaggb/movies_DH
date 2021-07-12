const { Movie } = require('../database/models')
const { validationResult } = require('express-validator')

const controller =
{
    list: (req, res) => {
        Movie.findAll()
            .then(movies => {
                res.render('moviesList', { movies })
            })
    },
    new: (req, res) => {
        res.render('newMovie')
    },
    create: (req, res) => {
        const formValidation = validationResult(req)
        const { title, rating, awards, length, releaseDate, genre_id } = req.body
        const oldValue = req.body
        const errors = formValidation.mapped()
        if (formValidation.isEmpty()) {
            const newMovie = {
                title,
                rating,
                awards,
                length,
                releaseDate,
                //FIXME - preguntar porque no me tome el genreId
                genre_id
            }
            Movie.create(newMovie)
                .then(() => {
                    res.redirect('/movies')
                }
                )
                .catch(err => {
                    console.log(err)
                })
            return
        }
        res.render('newMovie', { oldValue, errors })
    },
    detail: (req, res) => {
        Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail', { movie })
            })
    },
    edit: (req, res) => {
        Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesEdit', { movie })
            })
    },
    update: (req, res) => {
        const { rating, awards, length, realeseDate, title } = req.body
        const { id } = req.params
        const formValidation = validationResult(req)
        const oldValue = req.body
        oldValue.id = id
        const errors = formValidation.mapped()
        if(formValidation.isEmpty()){
        Movie.update({
            title,
            rating,
            awards,
            length,
            realeseDate
        },
            { where: { id } }
        )
            .then(() => {
                res.redirect('/movies/detail/' + id)
                
            })
            return
        }
        Movie.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesEdit', {movie, errors, oldValue})
            
        })
        return
    },
    delete: (req, res) => {
        const { id } = req.params
        Movie.destroy(
            { where: { id } }
        )
            .then(() => {
                res.redirect('/movies')
            })
            .catch(err =>{
                console.log(err)
            })
    }
}

module.exports = controller