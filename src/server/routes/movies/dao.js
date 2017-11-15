const { Client } = require('pg')
const config = require('../../config/config')

const client = new Client({
  user: config.USER,
  host: config.HOST,
  database: config.DATABASE,
  password: config.PASSWORD,
  port: config.PORT,
})

client.connect()

module.exports = class MoviesDAO {
  static query() {
    return new Promise((resolve, reject) => {
      client.query('SELECT * FROM title', (err, res) => {
        if (err) return reject(err)
        client.end()
        resolve(res.rows)
      })
    });
  };
}
