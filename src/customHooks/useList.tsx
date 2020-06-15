import React, { useState } from 'react';

interface Todo {
    id: number,
    todo: string,
    complete: boolean
}

const useList = (initialValue: Todo[]) => {
    const [todosList, setTodosList] = useState(initialValue);

    const addTodoHandler = (todo: string) => {
        let todos = [...todosList];
        todos.push({
            id: todos.length + 1,
            todo: todo,
            complete: false
        });
        setTodosList(todos);
        window.localStorage.setItem('savedList', JSON.stringify(todos));
    }
    const toggleTodoHandler = (todoId: number) => {
       let todos= todosList.map(todo=> {
            if(todo.id === todoId) {
             return {...todo, complete : !todo.complete}
            }
            else return todo;
        })
        setTodosList(todos);
        window.localStorage.setItem('savedList', JSON.stringify(todos));
    }
    const setTodos = (list: Todo[]) => {
        setTodosList(list)
    } 
    const getRemainingTodos= ()=> {
        return todosList.filter(todo=> !todo.complete).length;
    }
    return {
        todosList, addTodoHandler, toggleTodoHandler, setTodos, getRemainingTodos
    }
}
export default useList;