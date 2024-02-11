import React from 'react';

const AlbumComponent = ({album}) => {
    return (
        <div>
            <hr/>
            <ul>
                <li>userId: {album.userId}</li>
                <li>id: {album.id}</li>
                <li>title: {album.title}</li>
            </ul>
            <hr/>
        </div>
    );
};

export {AlbumComponent};