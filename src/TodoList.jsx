
function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            onClick={() => toggleTask(task.id)}
            style={{
              textDecoration: task.completed
                ? 'line-through'
                : 'none',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </span>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
