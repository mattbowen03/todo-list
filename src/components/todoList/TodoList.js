import React from "react";

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </div>
  );
}

export default TodoList;
