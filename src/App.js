import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // To store the list of todos
  const [input, setInput] = useState(''); // To handle the input field

  // Add a new todo
  const addTodo = () => {
    if (input.trim() === '') return; // Prevent empty todos
    setTodos([...todos, input]); // Add the new todo to the list
    setInput(''); // Clear the input field
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* Input Field and Add Button */}
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
