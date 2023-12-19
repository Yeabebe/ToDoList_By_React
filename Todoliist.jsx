import React from 'react';

const TodoList = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.text}</span>
          <div className="buttons">
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
};



export default TodoList;
