import axios from "../Helpers/axios"
import { authConstants } from "./Constants"

export const login=(user)=>{
    // console.log("user",user);
    // console.log("user",localStorage.user );
    return async (dispatch)=>{

        dispatch({type:authConstants.LOGIN_REQUEST})
        const res = await axios.post(`/signIn`,{
            ...user
        })

        if(res.status===200){
            const {token,user}=res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user));
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }
        else{
            if(res.status===400){
                dispatch({
                    type:authConstants.LOGIN_FAILED,
                    payload:{erroe:res.data.error}
                })
            }
        }
    }
}

export const isUserLoggedIn = ()=>{
    return async (dispatch)=>{
        const token=localStorage.getItem("token");
        if(token){
            const user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            dispatch({
                type:authConstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            })
        }else{
            dispatch({
                type:authConstants.LOGIN_FAILED,
                payload:{erroe:"Failed to login"}
            })
        }
    }
}