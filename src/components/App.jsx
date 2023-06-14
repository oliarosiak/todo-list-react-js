import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import css from './App.module.css';

import TodoForm from './todoForm/TodoForm';
import TodoList from './todoList/TodoList';
import TodoListItems from './todoListItems/TodoListItems';
import TodoCalendar from './calendar/TodoCalendar';

export default function App() {
  const [todoList, setTodoList] = useLocalStorage('userTodoList', []);

  const formSubmitHandler = newTodo => {
    const todoItem = {
      id: nanoid(5),
      todo: newTodo,
      done: false,
    };

    const sortedPrevTodo = [...todoList].sort((a, b) => a.done - b.done);
    setTodoList([todoItem, ...sortedPrevTodo]);
  };

  const todoDeleteBtn = key => {
    const newList = todoList.filter(item => item.id !== key);
    setTodoList([...newList]);
  };

  const checkboxTodoHandler = key => {
    const checkedTodo = todoList
      .map(item => {
        if (item.id === key) {
          return { ...item, done: !item.done };
        }
        return item;
      })
      .sort((a, b) => a.done - b.done);
    setTodoList([...checkedTodo]);
  };

  return (
    <div className={css.App}>
      <div className={css.TodoBlock} >
        <h1>ToDo List</h1>
        <TodoForm onSubmit={formSubmitHandler} />
        <TodoList>
          <TodoListItems options={todoList} onDeleteBtn={todoDeleteBtn} onChecbox={checkboxTodoHandler} />
        </TodoList>

      </div>
      <div className={css.CalendarBlock} >
        <TodoCalendar />
      </div>      
    </div>
  );
}
