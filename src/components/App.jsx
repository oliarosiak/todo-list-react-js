import { useState } from 'react';
import { nanoid } from 'nanoid';
import { GrAddCircle } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';
import css from './App.module.css';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputTodoHandler = event => {
    setNewTodo(event.target.value);
  };

  const formTodoHandler = event => {
    event.preventDefault();

    if (newTodo.trim() === '') {
      alert('Write some new todo!');
      return;
    }

    const todoItem = {
      id: nanoid(5),
      todo: newTodo,
      done: false
    } 

    setTodoList(prevTodo => [...prevTodo, todoItem]);    
    setNewTodo('');
  };

  const todoDeleteBtn = (key) => {
    const newList = todoList.filter(item => item.id !== key);
    setTodoList([...newList]);
  }

  const checkboxTodoHandler = (key) => {

    const checkedTodo = todoList.map(item => {
      if (item.id === key) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTodoList([...checkedTodo]);
  }

  return (
    <div className={css.App}>
      <h1>ToDo List</h1>
      <form onSubmit={formTodoHandler} className={css.TodoForm}>
        <label>
          <input
            type="text"
            placeholder="Add New ToDo"            
            value={newTodo}
            onChange={inputTodoHandler}
          ></input>
        </label>
        <button type="submit">
          <GrAddCircle />
        </button>
      </form>

      <ul className={css.TodoList}>
        {todoList.map(({id, todo, done}) => (
          <li key={id} className={css[`${done}`]}  >
            <input type="checkbox" checked={done} onChange={()=>checkboxTodoHandler(id)} />
            <span>{todo}</span>
            <button type="button" onClick={()=>todoDeleteBtn(id)}>
              <RiDeleteBin5Line />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
