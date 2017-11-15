const MoviesController = require('./controller')

module.exports = class MoviesRoutes {
  static init(router) {
    router
      .route('/movies')
      .get(MoviesController.query)

    router
      .route('/movies/:id')
      .get(MoviesController.getById)
  }
}
