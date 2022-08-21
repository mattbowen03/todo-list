import React from "react";

function AddTodo({ handleSubmit, formValue, handleChange }) {
  return (
    <div>
      <h1>My Todos</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <input
          type='text'
          value={formValue}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default AddTodo;
