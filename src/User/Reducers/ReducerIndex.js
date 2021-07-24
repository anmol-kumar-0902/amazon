import { combineReducers } from 'redux'
import reducer from './auth.reducer'
import userReducer from './user.reducer';

const rootReducer=combineReducers({
    auth:reducer,
    user:userReducer
    });

export default rootReducer 