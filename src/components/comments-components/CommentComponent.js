import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <hr/>
            <ul>
                <Link to={`/posts`} state={comment}><li>postId: {postId}</li></Link>
                <li>id: {id}</li>
                <li>name: {name}</li>
                <li>email: {email}</li>
                <li>body: {body}</li>
            </ul>
            <hr/>
        </div>
    );
};

export {CommentComponent};