const getTasks = 'SELECT * FROM tasks';
const getTaskByID = "SELECT * FROM tasks WHERE task_id = $1"
const addTask = "INSERT INTO tasks(task_name, description, priority_level, created_at) VALUES($1, $2, $3, $4)"
const deleteTask = "DELETE FROM tasks WHERE task_id = $1"
const editTask = "UPDATE tasks SET task_name= $1, description = $2 , priority_level= $3, WHERE task_id = $4"

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  getTaskByID,
  editTask
}
