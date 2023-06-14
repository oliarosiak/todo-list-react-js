import PropTypes from 'prop-types';
import css from './TodoList.module.css';

export default function TodoList({ children }) {    
    return (
        <ul className={css.TodoList} >
            {children}
        </ul>
    );
}

TodoList.propTypes = {
    children: PropTypes.object.isRequired,
}