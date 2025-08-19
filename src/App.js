import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My To-Do App</h1>
        <p>Get things done with ease!</p>
      </header>
      <main>
        {/* Todo components will go here */}
        <div className="todo-container">
          <p>Welcome to my To-Do App!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
