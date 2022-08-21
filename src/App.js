import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/addTodo/AddTodo";
import { useState } from "react";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [todos, setTodos] = useState(["hwllo", "lkajl;kj"]);
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (event) => {
    setTodos(event.target.value);
    event.preventDefault();
    console.log(todos);
  };

  const handleChange = (event) => {
    setFormValue(event.target.value);
    console.log("formvalue", formValue);
  };

  return (
    <div className='App'>
      <header>
        <AddTodo
          handleSubmit={handleSubmit}
          formValue={formValue}
          handleChange={handleChange}
        />
        <TodoList todos={todos} />
      </header>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
