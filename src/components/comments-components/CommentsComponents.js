import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/comments.api.service";
import {CommentComponent} from "./CommentComponent";

const CommentsComponents = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(comments => setComments(comments.data));
    }, [])

    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {CommentsComponents};