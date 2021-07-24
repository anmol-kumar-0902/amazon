import { authConstants } from "../Actions/Constants"

const initialState={
    token:null,
    user:{
        name:'',
        email:'',
        contactNumber:''
    },
    authenticating:false,
    authenticate:false,
    logout:false,
    loading:false,
    error:null,
    message:''

}

export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true,
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticating:false,
                authenticate:true,
            }
            break;
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case authConstants.LOGOUT_SUCCESS:
            state={
                ...state,
                logout:true
            }
            break;
        case authConstants.LOGOUT_FAILED:
            state={
                ...state,
                error:action.payload.error,
                loading:false,
                logout:false
            }
            break;
        
    }

    return state;
}