
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from './TodoList';

const App = () => {
    const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master lifting state up", completed: false }
  ]);
  
  function handleComplete(id){
    setTodos((prevTodos => prevTodos.map(todo => todo.id === id ? {...todo, completed: true} : todo)))
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
    </div>
  )
}

export default App
