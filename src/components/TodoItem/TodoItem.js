import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggleComplete, onDeleteTodo }) => {
  const handleToggle = () => {
    onToggleComplete(todo.id);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}>
      <div className="todo-item__content">
        <button
          className={`todo-item__checkbox ${todo.completed ? 'todo-item__checkbox--checked' : ''}`}
          onClick={handleToggle}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && (
            <span className="todo-item__checkmark">✓</span>
          )}
        </button>
        
        <div className="todo-item__text-container">
          <p className="todo-item__text">{todo.text}</p>
          <span className="todo-item__date">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <button
        className="todo-item__delete"
        onClick={handleDelete}
        aria-label="Delete todo"
      >
        <span className="todo-item__delete-icon">×</span>
      </button>
    </div>
  );
};

export default TodoItem;
