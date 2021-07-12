const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const newMovieValidate = require('../middlewares/newMovieValidate')
const editMovieValidate = require('../middlewares/editMovieValidate')


router.get('/movies', moviesController.list);
router.get('/movies/create', moviesController.new);
router.post('/movies/create', newMovieValidate, moviesController.create);
router.get('/movies/detail/:id', moviesController.detail)
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/update/:id', editMovieValidate, moviesController.update);
router.delete('/movies/delete/:id', moviesController.delete)

//router.get('/movies/recommended', moviesController.recomended);
//router.get('/movies/detail/:id', moviesController.detail);


module.exports = router;