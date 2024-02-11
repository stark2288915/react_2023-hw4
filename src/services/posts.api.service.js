import axios from "axios";
import {axiosBase} from "./base.url";


const getPost = (id) => {
    return axiosBase.get(`/posts/${id}`)
}

export {getPost};