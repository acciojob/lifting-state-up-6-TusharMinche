
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from './TodoList';

const todoList = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master lifting state up", completed: false }
  ]

const App = () => {
    const [todos, setTodos] = useState(todoList);
  
  function handleComplete(id){
    const change = todos.map(todo => todo.id === id ? {...todo, completed: true} : todo)
    setTodos(change);
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
