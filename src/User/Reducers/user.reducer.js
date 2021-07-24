import { userConstants } from "../Actions/Constants"

const initialState={
    error:null,
    message:'',
    loading:false,
    signUp:false
}
export default (state=initialState,action)=>{
    switch(action.type){
        case userConstants.USER_REGISTER_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case userConstants.USER_REGISTER_SUCCESS:
            state={
                ...state,
                loading:false,
                message:action.payload.message,
                signUp:true
            }
            break;
        case userConstants.USER_REGISTER_FAILED:
            state={
                ...state,
                loading:false,
                error:action.payload.error,
                signUp:false
            }
            break;
        
    }
    return state;
}