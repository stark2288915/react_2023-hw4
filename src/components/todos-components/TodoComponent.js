import React from 'react';

const TodoComponent = ({todo}) => {
    
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <hr/>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>completed: {completed}</li>
            </ul>
            <hr/>
        </div>
    );
};

export default TodoComponent;