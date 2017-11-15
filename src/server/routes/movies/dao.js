const db = require('../../db')

module.exports = class MoviesDAO {
  static query() {
    return new Promise((resolve, reject) => {
      const values = null;

      db.query('SELECT * FROM title', values, (err, res) => {
        if (err) return reject(err)

        resolve(res.rows)
      })
    });
  };
}
