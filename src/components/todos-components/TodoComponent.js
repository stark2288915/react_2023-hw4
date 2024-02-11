import React from 'react';

const TodoComponent = ({todo}) => {
    return (
        <div>
            <hr/>
            <ul>
                <li>userId: {todo.userId}</li>
                <li>id: {todo.id}</li>
                <li>title: {todo.title}</li>
                <li>completed: {todo.completed}</li>
            </ul>
            <hr/>
        </div>
    );
};

export default TodoComponent;