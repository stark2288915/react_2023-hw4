import React from 'react';

const PostDetailsCommponent = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div>
            <h2>Post</h2>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
                <li>body: {body}</li>
            </ul>
        </div>
    );
};

export {PostDetailsCommponent};