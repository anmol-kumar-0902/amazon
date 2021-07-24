import axios from "axios";
import { api } from "../../urlConfig";
import { authConstants } from "../Actions/Constants";
import store from '../Store/StoreIndex'
const token = window.localStorage.getItem('token');
console.log("axios",token);
const axiosIsntance = axios.create({
    baseURL:api,
    headers:{
        'Authorization':token? `Bearer ${token}`:''
    }

});

axiosIsntance.interceptors.request.use((req)=>{
    const {auth} =store.getState();
    if(auth.token){
        req.headers.Authorization= `Bearer ${auth.token}`
    }

    return req;
});
axiosIsntance.interceptors.request.use((res)=>{
    return res;
},(error)=>{
    console.log(error.response);
    const {status}=error.response;
    if(status===500){
        window.localStorage.clear();
        store.dispatch({type:authConstants.LOGOUT_SUCCESS})
    }
    return Promise.reject(error);

})

export default axiosIsntance;