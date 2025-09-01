import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

const TodoList = ({ todos, onToggleComplete, onDeleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="todo-list__empty">
        <div className="todo-list__empty-icon">📝</div>
        <h3 className="todo-list__empty-title">No todos yet!</h3>
        <p className="todo-list__empty-text">
          Add your first todo above to get started.
        </p>
      </div>
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="todo-list">
      <div className="todo-list__header">
        <h3 className="todo-list__title">Your Todos</h3>
        <div className="todo-list__stats">
          <span className="todo-list__count">
            {completedCount} of {totalCount} completed
          </span>
        </div>
      </div>
      
      <div className="todo-list__items">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
