
import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="container">
      <h1>My TODO Application</h1>

      <TodoForm addTask={addTask} />

      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
