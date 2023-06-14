import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import css from './TodoListItems.module.css';

export default function TodoListItems({options, onDeleteBtn, onChecbox}) {
    return (
        <>
            {options.map(({ id, todo, done }) => (
                <li key={id} className={css[`${done}`]}>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={() => onChecbox(id)}
                        name='check'
                    />
                    <span>{todo}</span>
                    <button type="button" onClick={() => onDeleteBtn(id)}>
                        <RiDeleteBin5Line />
                    </button>
                </li>
            ))}
        </>
    );
}

TodoListItems.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        todo: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    })).isRequired,
    onDeleteBtn: PropTypes.func.isRequired,
    onChecbox: PropTypes.func.isRequired,
}

