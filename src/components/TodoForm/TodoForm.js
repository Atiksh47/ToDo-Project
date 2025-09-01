import React, { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      onAddTodo({
        id: Date.now(),
        text: todoText.trim(),
        completed: false,
        createdAt: new Date()
      });
      setTodoText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form__container">
        <input
          type="text"
          className="todo-form__input"
          placeholder="What needs to be done?"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          maxLength={100}
        />
        <button 
          type="submit" 
          className="todo-form__button"
          disabled={!todoText.trim()}
        >
          <span className="todo-form__button-text">Add</span>
          <span className="todo-form__button-icon">+</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
