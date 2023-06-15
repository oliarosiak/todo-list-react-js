import css from './TodoHeader.module.css';

export default function TodoHeader() {
    return (
        <div className={css.Heading}>            
            <img className={css.HeadingImage} src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg' alt='bullet journal' />
            <h1 className={css.HeadingTitle}>ToDo List</h1>
        </div>
    )
}
