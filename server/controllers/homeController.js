const pool = require('../db').pool;
const queries = require('../queries');

const homeRender = (req, res) => {
  pool.query(queries.getTasks, (error, results) => {
    if (error) {
      console.log(error.message);
      throw (error);
    }
    const tasks = results.rows;
    res.render('index', { tasks: tasks });
  })
}

module.exports = {
  homeRender,

}
