const express = require('express')
const router = express.Router()
const movies = require('../controllers/moviesControllers')
const auth = require('../middlewares/authentication')
const author = require('../middlewares/authorization')
const uploadPoster = require('../middlewares/uploadPoster')

router.post("/post", auth, author.authAdmin, uploadPoster("poster"), movies.postMovie)  
router.get("/:id", movies.getOneMovie)
router.get("/all/:page", movies.getAllMovies)
router.get("/genre/:name/:page", movies.getAllMoviesByGenre)
router.get("/listgenre/:id", movies.getAllGenreByMovieId)
router.get("/artist/:id", movies.getAllMoviesByArtistId)
router.get("/listartist/:id", movies.getAllArtistByMovieId)
router.get("/tag/:id", movies.getAllMovieByTagId)
router.get("/listtag/:id", movies.getAllTagByMovieId)
router.put("/update/:id", auth, author.authAdmin, uploadPoster("poster"), movies.updateMovies)
router.delete("/delete/:id", auth, author.authAdmin, movies.deleteMovies)
router.get("/search/:title", movies.searchMoviesbyTitle)

module.exports = router