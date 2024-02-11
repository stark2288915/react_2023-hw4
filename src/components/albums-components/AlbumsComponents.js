import React, {useEffect, useState} from 'react';
import {getAlbums} from "../../services/albums.api.service";
import {AlbumComponent} from "./AlbumComponent";

const AlbumsComponents = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=> {
        getAlbums().then(albums => setAlbums(albums.data));
    }, [])

    return (
        <div>
            <h3>Albums</h3>
            {albums.map(album => <AlbumComponent album={album} key={album.id}/>)};
        </div>
    );
};

export {AlbumsComponents};