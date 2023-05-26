const { Movie } = require('../models')


const create = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const movies = await Movie.findAll()
    res.status(200).json(movies)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const movie = await Movie.update(
      req.body,
      { where: { id: req.params.movieId }, returning: true }
    )
    res.status(200).json(movie)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMovie = async (req, res) => {
  try {
    // Calling destroy on the model will not return the deleted record!
    const numberOfRowsRemoved = await Movie.destroy(
      { where: { id: req.params.movieId } }
    )
    res.status(200).json(numberOfRowsRemoved) // Expected: 1
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteMovie

}