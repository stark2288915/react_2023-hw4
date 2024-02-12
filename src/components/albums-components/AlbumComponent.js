import React from 'react';

const AlbumComponent = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div>
            <hr/>
            <ul>
                <li>userId: {userId}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
            </ul>
            <hr/>
        </div>
    );
};

export {AlbumComponent};