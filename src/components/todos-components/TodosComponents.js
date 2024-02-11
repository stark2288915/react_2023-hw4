import React, {useEffect, useState} from 'react';
import {TodosPage} from "../../pages/todos-page/TodosPage";
import TodoComponent from "./TodoComponent";
import {getTodos} from "../../services/todos.api.service";

const TodosComponents = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(todos => setTodos(todos.data))
    }, [])

    return (
        <div>
            <h3>Todos</h3>
            {todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
        </div>
    );
};

export {TodosComponents};