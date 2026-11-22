
import { useState } from 'react';

function TodoForm({ addTask }) {
  const [task, setTask] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === '') return;

    addTask(task);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter your task"
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoForm;
