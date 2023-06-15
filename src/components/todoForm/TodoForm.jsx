import { useState } from "react";
import PropTypes from 'prop-types';
import { GrAddCircle } from 'react-icons/gr';
import css from './TodoForm.module.css';


export default function TodoForm({ onSubmit }) {
    const [newTodo, setNewTodo] = useState('');

    const inputTodoHandler = event => {
    setNewTodo(event.target.value);
    };    

    const submitHandler = event => {
        event.preventDefault();
        if (newTodo.trim() === '') {
            alert('Write some new todo!');
            return;
        }
        onSubmit(newTodo);
        setNewTodo('');
    };
    
    return (
        <form onSubmit={submitHandler} className={css.TodoForm}>
            <label className={css.FormLabel}>
                <input
                    type="text"
                    placeholder="Add New ToDo"
                    value={newTodo}
                    onChange={inputTodoHandler}
                    name='todo'
                    className={css.FormInput}
                    autoComplete="off"
                ></input>
            </label>
            <button type="submit" className={css.FormButton} >                
                <span className={css.FormButtonImg}><GrAddCircle /> Let's do it!</span>               
            </button>
        </form>
    );
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}
