import axios from "axios";
import { api } from "../../urlConfig";

const axiosIsntance = axios.create({
    baseURL:api

})

export default axiosIsntance;