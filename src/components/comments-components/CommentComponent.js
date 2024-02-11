import React from 'react';
import {Link} from "react-router-dom";

const CommentComponent = ({comment}) => {
    return (
        <div>
            <hr/>
            <ul>
                <Link to={'post'} state={comment}><li>postId: {comment.postId}</li></Link>
                <li>id: {comment.id}</li>
                <li>name: {comment.name}</li>
                <li>email: {comment.email}</li>
                <li>body: {comment.body}</li>
            </ul>
            <hr/>
        </div>
    );
};

export {CommentComponent};