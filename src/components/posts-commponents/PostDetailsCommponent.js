import React from 'react';

const PostDetailsCommponent = ({post}) => {
    return (
        <div>
            <h2>Post</h2>
            <ul>
                <li>userId: {post.userId}</li>
                <li>id: {post.id}</li>
                <li>title: {post.title}</li>
                <li>body: {post.body}</li>
            </ul>
        </div>
    );
};

export {PostDetailsCommponent};