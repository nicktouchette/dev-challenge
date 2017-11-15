const MoviesDAO = require('./dao');

module.exports = class MoviesController {
  static query(req, res) {
    MoviesDAO
      .query()
      .then(titles => res.status(200).json(titles))
      .catch(error => {res.status(400).json(error.message)});
  }
}
