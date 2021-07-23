import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Rootreducer from '../Reducers/ReducerIndex'
const store = createStore(Rootreducer,applyMiddleware(thunk))

export default store;