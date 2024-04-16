const pool = require('../db').pool;
const queries = require('../queries');

const deleteTask = (req, res) => {
  let id = parseInt(req.params.id);

  pool.query(queries.deleteTask, [id], (error, results) => {
    if (error) {
      console.log(error.message);
      throw error;
    }
    res.redirect('/');
  })


}

module.exports = {
  deleteTask,
}
