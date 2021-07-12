const  { body } = require('express-validator')
const { Movie } = require('../database/models')
const validations = [
    body('title').notEmpty().withMessage('Elige el nombre de la pelicula')
    .bail()
    .custom((value, {req}) => {
        const { title } = req.body
        return Movie.findOne(
            {where: {title}}
        )
        .then(movieFind => {
            if(movieFind){
                return Promise.reject("La película ya existe")
            }             
        })
    }),
    body('genre_id').notEmpty().withMessage("Debe seleccionar el genero de la película"),
    body('rating').notEmpty().withMessage("El rating no puede estar vacío").bail().isNumeric().withMessage('El rating debe ser numérico'),
    body('awards').notEmpty().withMessage("Los premios no pueden estar vacíos").bail().isNumeric().withMessage('Los premios deben ser numéricos'),
    body('length').notEmpty().withMessage("El largo de la película no puede estar vacío").bail().isNumeric().withMessage('El largo de la película debe ser numérico'),
    body('releaseDate').notEmpty().withMessage("Debe seleccionar la fecha de lanzamiento").bail().isDate().withMessage('Debe seleccionar una fecha')


]

module.exports = validations