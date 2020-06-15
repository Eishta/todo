import React, { useEffect } from "react";
import '../styles/todo.css'
import useFormInput from '../customHooks/useFormInput';
import useList from '../customHooks/useList';

const AddTodo: React.FC = () => {
    useEffect(() => {
        let list = window.localStorage.getItem('savedList');
        let parsedList = list ? JSON.parse(list || '[]') : null;
        if (parsedList && parsedList.length !== 0) {
            setTodos(parsedList);
        }
    }, [])
    let { input, valid, onChange, resetInput } = useFormInput('');

    let { todosList, addTodoHandler, toggleTodoHandler, setTodos, getRemainingTodos } = useList([]);

    const addTodo = () => {
        if (valid) {
            addTodoHandler(input)
            resetInput();
        }
        else return;
    }
    const renderList = () => {
        return todosList.map((todo) => < li className='listType' key={todo.id}>
            <span  className={todo.complete ? "strike" : "undefined"} onClick={() => toggleTodoHandler(todo.id)}>{todo.todo} {todo.complete} </span>
        </li>
        )
    }
    return (
        <div className="list-view" >
            <div className="count">Total todos remaining: {getRemainingTodos()} out of {todosList.length}</div>
            <input type='text' value={input} onChange={e => onChange(e.target.value)} />
            <button className="button" value="add" onClick={addTodo}> Add</button>
            {todosList.length !== 0 ?
                <ul>
                    {renderList()}
                </ul> : null}
        </div>
    )
}
export default AddTodo;