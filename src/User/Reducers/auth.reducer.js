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

}

export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticating:false,
                authenticate:true
            }
            break;
    }
    return state;
}