const { body } = require('express-validator')
const { Movie } = require('../database/models')
const validations = [
    body('title').notEmpty().withMessage('El nombre de la película no puede estar vacío')
        .bail()
        .custom((value, { req }) => {
            const { title } = req.body
            return Movie.findOne( //Saco el nombre de la pelicula por lo que pone el usuario
                { where: { title } }
            )
            .then(movieFind => {
                //si existe la pelicula y su id es diferente que el recibido por parámetros
                if(movieFind && movieFind.id != req.params.id){
                    return Promise.reject("La película ya existe")
                }
            })
        }),          
    body('rating').notEmpty().withMessage("El rating no puede estar vacío").bail().isNumeric().withMessage('El rating debe ser numérico'),
    body('awards').notEmpty().withMessage("Los premios no pueden estar vacíos").bail().isNumeric().withMessage('Los premios deben ser numéricos'),
    body('length').notEmpty().withMessage("El largo de la película no puede estar vacío").bail().isNumeric().withMessage('El largo de la película debe ser numérico'),
    body('releaseDate').notEmpty().withMessage("La fecha no puede estar vacía").bail().isDate().withMessage('Debe seleccionar una fecha')


]

module.exports = validations