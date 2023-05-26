const router = require('express').Router()
const moviesCtrl = require('../controllers/movies.js')

router.post('/' , moviesCtrl.create)
router.get('/' , moviesCtrl.index)
router.put('/:movieId' , moviesCtrl.update)
router.delete('/:movieId' , moviesCtrl.delete)

module.exports = router