import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import './styles/App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on app start
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const toggleComplete = (todoId) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
        <p>Organize your life, one task at a time</p>
      </header>
      
      <main className="App-main">
        <div className="todo-container">
          <TodoForm onAddTodo={addTodo} />
          <TodoList
            todos={todos}
            onToggleComplete={toggleComplete}
            onDeleteTodo={deleteTodo}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
