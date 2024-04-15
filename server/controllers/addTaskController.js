const pool = require('../db').pool;
const queries = require('../queries');

const addTaskRender = (req, res) => {
  res.render('addTask');
}

const addTask = (req, res) => {
  const { task_title, task_description, priority } = req.body;
  let created_at = new Date();
  const year = created_at.getFullYear();
  const day = created_at.getDay();
  const month = created_at.getMonth();
  const hour = created_at.getHours();
  const minutes = created_at.getMinutes();
  const seconds = created_at.getSeconds();

  created_at = `${year} ${month} ${day} ${hour}:${minutes}:${seconds}`;

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
