import axios from "../Helpers/axios"
import { authConstants, userConstants } from "./Constants"

export const signup = (user) => {

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST })
        const res = await axios.post(`/signUp`, {
            ...user
        })

        if (res.status === 201) {
            const { msg } = res.data;
            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message:msg
                }
            })
        }
        else {
            if (res.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILED,
                    payload:{error:res.data.error}
                })
            }
        }
    }
}
