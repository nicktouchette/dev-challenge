const MoviesDAO = require('./dao');

module.exports = class MoviesController {
  static query(req, res) {
    switch(req.query.action) {
      case 'search':
        MoviesDAO
          .search(req.query.value)
          .then(movie => res.status(200).json(movie))
          .catch(error => res.status(400).json(error.message))
        break
      default:
        MoviesDAO
          .showAll()
          .then(titles => res.status(200).json(titles))
          .catch(error => {res.status(400).json(error.message)})
    }
  }

  static getById(req, res) {
    MoviesDAO
      .getById(req.params.id)
      .then(movie => res.status(200).json(movie))
      .catch(error => res.status(400).json(error.message))
  }
}
