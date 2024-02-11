import axios from "axios";
import {axiosBase} from "./base.url";

const getTodos = () => {
    return axiosBase.get('/comments');
}

export {getTodos};