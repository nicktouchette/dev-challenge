const db = require('../../db')

module.exports = class MoviesDAO {
  static showAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM title', null, (err, res) => {
        if (err) return reject(err)

        resolve(res.rows)
      })
    });
  };

  static getById(id) {
    return new Promise((resolve, reject) => {
      id = Number.parseInt(id);

      if (!id) {
        return reject(new Error("id is invalid."));
      }

      db.query('SELECT * FROM title WHERE id = $1', [id], (err, res) => {
        if (err) return reject(err)

        resolve(res.rows)
      })
    });
  }
}
