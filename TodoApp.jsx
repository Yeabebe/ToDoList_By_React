import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './TodoApp.css'; // Import your CSS file

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };




  
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };



  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };



  return (
    <div className="todo-app">
      <h1>Advanced To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
};

export default TodoApp;
