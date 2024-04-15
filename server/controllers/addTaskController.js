const pool = require('../db').pool;
const queries = require('../queries');

const addTaskRender = (req, res) => {
  res.render('addTask');
}

const addTask = (req, res) => {
  const { task_title, task_description, priority } = req.body;
  let created_at = new Date().toJSON();

  pool.query(queries.addTask, [task_title, task_description, priority, created_at], (error, results) => {
    if (error) {
      console.log(error.message);
      throw error;
    } else {
      res.redirect('/')
    }
  })


}

module.exports = {
  addTask,
  addTaskRender
}
