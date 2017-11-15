const db = require('../../db')

module.exports = class MoviesDAO {
  static showAll() {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM title', null, (err, res) => {
        if (err) return reject(err)

        resolve(res.rows)
      })
    })
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      if (!id) {
        return reject(new Error("id is invalid."))
      }

      db.query('SELECT * FROM title WHERE id::bigint = $1', [id], (err, res) => {
        if (err) return reject(err)

        resolve(res.rows)
      })
    })
  }

  static search(name) {
    return new Promise((resolve, reject) => {
      if (!name) {
        return reject(new Error("name is invalid."))
      }

      db.query('SELECT * FROM title WHERE title_name ILIKE $1', [`%${name}%`], (err, res) => {
        if (err) return reject(err)

        if (res) {
          return resolve(res.rows)
        } else {
          return resolve([])
        }
      })
    })
  }
}
