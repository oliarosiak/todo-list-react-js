import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import css from './App.module.css';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputTodoHandler = (event) => {    
    setNewTodo(event.target.value)
  }

  const formTodoHandler = (event) => {
    event.preventDefault();  
    setTodoList(prevTodo => [...prevTodo, newTodo]);    
    setNewTodo('');    
  }

  return (
    <div className={css.App} >
      <h1>ToDo List</h1>
      <form onSubmit={formTodoHandler} className={css.TodoForm} >
        <label>          
          <input
            type="text"
            placeholder="Add New ToDo"
            value={newTodo}
            onChange={inputTodoHandler}
          ></input>
        </label>
        <button type='submit'><GrAddCircle /></button>
      </form>

      <ul className={css.TodoList} >
        {todoList.map(todo => (
          <li key={todo} className={css.TodoListItem} >
            <input type='checkbox' />
            <span>{todo}</span>
            <button type='button'><RiDeleteBin5Line /></button>
          </li>
        ))}
      </ul>
    </div>
  );

}
