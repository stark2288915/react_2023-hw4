import axios from "axios";
import {axiosBase} from "./base.url";


const getComments = () => {
    return axiosBase.get('/comments');
}

export {getComments};