import React from "react";

function TodoList({ todos, handleComplete }) {
  return (
    <div>
    <ul>
      {todos.map((todo) =>{ 
        return (
        <li key={todo.id} >
          <p>{todo.text}</p>

          {!todo.completed && 
            <button onClick={() => handleComplete(todo.id)}>
              Completed
            </button>
          }
        </li>
      )})}
    </ul>
    </div>
  );
}

export default TodoList;
