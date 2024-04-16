const pool = require('../db').pool;
const queries = require('../queries');

const editTaskRender = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTaskByID, [id], (error, results) => {
    if (error) {
      console.log(error.message);
      throw error;
    }
    let task = results.rows[0];
    res.render('editTask.ejs', { task: task });
  })
}

const editTask = (req, res) => {
  const id = parseInt(req.params.id);
  let { task_name, description, priority_level } = req.body;
  pool.query(queries.editTask, [task_name, description, priority_level, id], (error, results) => {
    if (error) {
      console.log(error);
      throw error;
    }
    res.redirect('/')
  })
}

module.exports = {
  editTaskRender,
  editTask
}
