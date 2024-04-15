const getTasks = 'SELECT * FROM tasks';
const addTask = "INSERT INTO tasks(task_name, description, priority_level, created_at) VALUES($1, $2, $3, $4)"

module.exports = {
  getTasks,
  addTask
}
