import axios from "axios";
import {axiosBase} from "./base.url";


const getAlbums = () => {
    return axiosBase.get('/albums');
}

export {getAlbums};